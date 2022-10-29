# Requirements Specification

## Table of Contents

<!-- TOC Start -->

-   [ Requirements Specification](#-requirements-specification)
    -   [1 Table of Contents](#-table-of-contents)
    -   [2 Introduction](#-1-introduction)
        -   [2.1 Overview and Justification](#-2-overview-and-justification)
        -   [2.2 Scope](#-21-scope)
        -   [2.3 System Design](#-22-system-design)
    -   [3 Solution Requirements](#-23-solution-requirements)
        -   [3.1 Functional Requirements](#-3-functional-requirements)
        -   [3.2 Non-Functional Requirements](#-31-non-functional-requirements)
            -   [3.2.1 - Core Requirements](#-32-core-requirements)
            -   [3.2.2 - Chatbot Requirements](#-321-chatbot-requirements)
            -   [3.2.3 - Some other set of requirements ...](#-322-some-other-set-of-requirements-)
        -   [3.3 Risks](#-323-risks)
    -   [4 Project Development](#-33-project-development)
    <!-- TOC End -->

## 1 Introduction

_What is this document?_

### 1 Overview and Justification

_Description of project and goals._

### 1.1 Scope

_not sure_

### 1.2 System Design

_Proposed system and key design points. Existing solutions. Does it need to integrate into current systems i.e. needs to be part of a larger website._

## 1.3 Solution Requirements

_Functional and non-functional requirements_

### 2 Functional Requirements

### 2.1 Non-Functional Requirements

#### 1 - Core Requirements

| Number, Title                  | #FR1.1 - Some title                                     |
| ------------------------------ | ------------------------------------------------------- |
| Description                    |                                                         |
| Priority (Must, Should, Could) |                                                         |
| Depends On                     |                                                         |
| Expected Results               | What can the system do as a result of this requirement? |
| Exception Handling             | What happens when it goes wrong?                        |

| Number, Title                  | #FR1.1 - Solution From                                         |
| ------------------------------ | -------------------------------------------------------------- |
| Description                    | The solution should be a website that is publicly accessible.  |
| Priority (Must, Should, Could) | Must                                                           |
| Depends On                     | N/A                                                            |
| Expected Results               | Anyone who is interested should be able to access the service. |
| Exception Handling             | The user should be shown a message to try again later.         |

| Number, Title                  | #FR1.2 - User Input                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Description                    | The solution should be able to take text input from a user. The user should be prompted for this input. |
| Priority (Must, Should, Could) | Must                                                                                                    |
| Depends On                     | N/A                                                                                                     |
| Expected Results               | The user can give input to the chatbot.                                                                 |
| Exception Handling             | The user should be shown a message to try again later.                                                  |

| Number, Title                  | #FR1.3 - Chatbot Output                                                  |
| ------------------------------ | ------------------------------------------------------------------------ |
| Description                    | The solution should be able display output from the chatbot to the user. |
| Priority (Must, Should, Could) | Must                                                                     |
| Depends On                     | N/A                                                                      |
| Expected Results               | The user can see response from the chatbot.                              |
| Exception Handling             | The user should be shown a message to try again later.                   |

| Number, Title                  | #FR1.4 - Courses Are Suggested                                               |
| ------------------------------ | ---------------------------------------------------------------------------- |
| Description                    | The user should be displayed a list of courses that would be useful to them. |
| Priority (Must, Should, Could) | Must                                                                         |
| Depends On                     | N/A                                                                          |
| Expected Results               | The user can pick a course to work on.                                       |
| Exception Handling             | The user should be shown a message to try again later.                       |

#### 2 - Chatbot Requirements

| Number, Title                  | #FR2.1 - Chatbot Asks Questions                              |
| ------------------------------ | ------------------------------------------------------------ |
| Description                    | Ask questions to the user to gather information on the user. |
| Priority (Must, Should, Could) | Must                                                         |
| Depends On                     | #FR1.2                                                       |
| Expected Results               | The chatbot can profile the user.                            |
| Exception Handling             | The user should be shown a message to try again later.       |

| Number, Title                  | #FR2.2 - Chatbot Suggested Input                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Description                    | Provide suggested responses. These should also guide the user as to what response the chatbot is looking for. |
| Priority (Must, Should, Could) | Should                                                                                                        |
| Depends On                     | #FR1.1                                                                                                        |
| Expected Results               | The user gets 3 suggested inputs that can be clicked on to send to the chatbot.                               |
| Exception Handling             | The user should be able to give an input manually.                                                            |

| Number, Title                  | #FR2.3 - Chatbot Response                                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Description                    | Return coherent responses that follow on from the previous messages to/from the user                     |
| Priority (Must, Should, Could) | Must                                                                                                     |
| Depends On                     | #FR1.3                                                                                                   |
| Expected Results               | The user can understand what the chatbot is trying to convey.                                            |
| Exception Handling             | If the user reports that responses are not coherent, apologies to them and tell them to try again later. |

| Number, Title                  | #FR2.4 - Chatbot Asks Follow Up Questions                                               |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| Description                    | Ask follow up questions e.g. ask the user if they have a degree then ask what it is in. |
| Priority (Must, Should, Could) | Must                                                                                    |
| Depends On                     | #FR2.1, #FR2.3                                                                          |
| Expected Results               | The chatbot can profile the user.                                                       |
| Exception Handling             | The profile should be a best guess with the information collected so far.               |

| Number, Title                  | #FR2.5 - Chatbot builds up a profile of the user                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description                    | Build a profile of the user based on answers to its questions. This should include the users approximate age, their level of education, technical skills ect. |
| Priority (Must, Should, Could) | Must                                                                                                                                                          |
| Depends On                     | #FR2.1, #FR2.4                                                                                                                                                |
| Expected Results               | The chatbot has a profile of the user.                                                                                                                        |
| Exception Handling             | The profile should be a best guess or average.                                                                                                                |

| Number, Title                  | #FR2.6 - Course suggestions are fitted to the users profile                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| Description                    | Course suggestions are relevant and interesting to the user.                    |
| Priority (Must, Should, Could) | Must                                                                            |
| Depends On                     | #FR1.4, #FR2.5                                                                  |
| Expected Results               | The user can pick courses that will help them to learn and achieve their goals. |
| Exception Handling             | The user should be shown a list of popular courses and a warning message.       |

#### 2 - Some other set of requirements ...

### 2.2.3 Risks

## 2.3 Project Development

_How are we going to make it. Are we going to use agile?_
