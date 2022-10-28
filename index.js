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

        title = title.replace(/(\d\.)*\d /, "");

        const newTitle = `${repeateString("#", depth)} ${indexes
            .slice(1)
            .join(".")} ${title.slice(depth + 1)}`;

        const id = title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .replace(/-+/g, "-");

        if (IDs[id]) {
            IDs[id]++;
            title += `-${IDs[id]}`;
        } else {
            IDs[id] = 1;
        }

        // Should add an id like 1.2.3 before the title

        if (depth > prevDepth) {
            indexes.push(1);
        } else if (depth < prevDepth) {
            indexes = indexes.slice(0, depth);
            indexes[indexes.length - 1]++;
        } else {
            indexes[indexes.length - 1]++;
        }

        prevDepth = depth;

        toc += `${repeateString(" ", (depth - 1) * 2)}- [${indexes
            .slice(1)
            .join(".")} ${title.slice(depth + 1)}](#${title
            .slice(depth + 1)
            .replace(/ /g, "-")})\n`;

        fileData = fileData.replace(title, newTitle);
    });

    const output = fileData.replace(tocRegex, `$1\n${toc}$3`);
    console.log(output);
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
