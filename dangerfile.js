const {fail} =  require("danger")
const fs = require("fs")
const jest = require('danger-plugin-jest/dist/index.js')
const stylelint = require('danger-plugin-stylelint')

// ESLINT
const esLintFile = "eslint-output.json";
const esLinterOutput = fs.readFileSync(esLintFile).toString();
const esLintJson = JSON.parse(esLinterOutput);

if (Object.keys(esLintJson).length !== 0) {
  for (let i = 0; i < esLintJson.length; i++) {
    const lint_obj = esLintJson[i];
    const file_path = lint_obj.filePath;
    const line_no = lint_obj.messages[0].line;
    const danger_message = lint_obj.messages[0].message;

    let full_message = `Path: ${file_path} - Line: ${line_no} - message: ${danger_message}`;
    fail(`Eslint Failure: ${full_message}`);
  }
}

// TEST
jest.default();
// STYLELINT
stylelint.default();
