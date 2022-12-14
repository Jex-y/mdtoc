const fs = require("fs");
const core = require("@actions/core");
const glob = require("glob");

const generateToc = (fileData) => {
    const titlesRegex = /^#+ .+$/gm;
    const tocRegex = /^(<!-- TOC Start -->)$(.*)^(<!-- TOC End -->)$/gims;
    indexes = [];

    let toc = "";
    const IDs = {};
    let prevDepth = 0;

    fileData.match(titlesRegex).forEach((title) => {
        depth = 0;
        while (title.at(depth) === "#") {
            depth++;
        }

        if (depth > prevDepth) {
            indexes.push(1);
        } else if (depth < prevDepth) {
            indexes = indexes.slice(0, depth);
            indexes[indexes.length - 1]++;
        } else {
            indexes[indexes.length - 1]++;
        }

        const number = indexes.slice(1).join(".");
        const newTitleTOC = `${number ? number + " " : ""}${title
            .replace(/(\d\.)*\d /, "")
            .slice(depth + 1)}`;
        const newTitle = `${repeateString("#", depth)} ${newTitleTOC}`;

        const id = newTitle
            .toLowerCase()
            .slice(depth + 1)
            .replace(/[^a-z0-9- ]/g, "")
            .trim()
            .replace(/ +/g, "-")
            .replace(/ /g, "-");

        if (IDs[id]) {
            IDs[id]++;
            newTitle += `-${IDs[id]}`;
        } else {
            IDs[id] = 1;
        }

        prevDepth = depth;

        toc += `${repeateString(
            " ",
            (depth - 1) * 2
        )}- [${newTitleTOC}](#${id})\n`;

        fileData = fileData.replace(title, newTitle);
    });

    const output = fileData.replace(tocRegex, `$1\n${toc}$3`);
    return output;
};

const repeateString = (string, times) => {
    let toc = "";
    for (let i = 0; i < times; i++) {
        toc += string;
    }
    return toc;
};

const globs = core.getInput("files").split(" ");

globs.forEach((globPath) => {
    glob(globPath, (err, files) => {
        if (err) {
            core.setFailed(err.message);
        }
        files.forEach((file) => {
            fs.readFile(file, "utf8", (err, data) => {
                if (err) {
                    core.setFailed(err.message);
                }
                fs.writeFile(file, generateToc(data), (err) => {
                    if (err) {
                        core.setFailed(err.message);
                    }
                });
            });
        });
    });
});
