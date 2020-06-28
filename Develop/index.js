const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message:"Please enter your project title: "
    },
    {
        type: "input",
        name: "desc",
        message:"Please enter your project description: "
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions: "
    },
    {
        type: "input",
        name: "cont",
        message: "Please enter contribution guidelines: "
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username: "
    },
    {
        type: "input",
        name: "repo",
        message: "Please enter the repository name: "
    },
    {
        type: "list",
        name: "license",
        message: "Please select licenses: ",
        choices: [
            "Apache",
            "MIT",
            "Mozilla"
        ]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function(err){
        if(err)
            console.log(err);
    })
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((response) => {

        var text = `
    [![${response.repo}](https://img.shields.io/github/languages/top/${response.github}/${response.repo})](https://img.shields.io/github/languages/top/${response.github}/${response.repo})
    ## Title
    ${response.title}

    ## Description
    ${response.desc}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)

    ## Installation
    ${response.install}

    ## Usage
    ${response.usage}

    ## Contribution
    ${response.cont}

    ## Test Instructions
    ${response.test}

    ## License
    Notice: This application is covered under ${response.license}.

    ## Questions
    Feel free to reach out ${response.email} or visit github page at "https://github.com/${response.github}" for more information.

    `

    writeToFile("README.md", text);

    })
}

// function call to initialize program
init();
