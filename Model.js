const inquirer = require('inquirer');
const fs = require('fs').promises;
const Test = require('./Test.js');
const chalk = require("chalk");
const figlet = require("figlet");
console.log(chalk.magenta.bold(figlet.textSync("Hello, friend!", { horizontalLayout: "full" })));
class ChoiceTestFile {
  static async chooseTopic() {
    try {
      const result = await inquirer
        .prompt([
          {
            type: 'list',
            name: 'Choice',
            message: chalk.bold('Выбери тему викторины:'),
            choices: [
              { name: chalk.magenta('Общие Знания') },
              { name: chalk.green('Правила дорожного движения') },
              { name: chalk.blue('Мультфильмы') },
            ],
          },
        ]);
      return result;
    } catch ({ error }) {
      console.error('Ошибка при чтении файлов:', error);
    }
  }
}

ChoiceTestFile.chooseTopic();

module.exports = ChoiceTestFile;
