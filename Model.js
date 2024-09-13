const inquirer = require('inquirer');
const fs = require('fs').promises;
const chalk = require('chalk');
const figlet = require('figlet');
const Test = require('./Test.js');

console.log(chalk.magenta.bold(figlet.textSync('Hello, friends!', { horizontalLayout: 'full' })));

class ChoiceTestFile {
  static async chooseTopic() {
    try {
      const result = await inquirer
        .prompt([
          {
            type: 'list',
            name: 'Choice',
            message: chalk.magenta('Выбери тему викторины:'),
            choices: [
              { name: chalk.magenta('Общие Знания') },
              { name: chalk.blue('Правила дорожного движения') },
              { name: chalk.green('Мультфильмы') },
            ],
          },
        ]);
      return result;
    } catch ({ error }) {
      console.error('Ошибка при чтении файлов:', error);
    }
  }
}

// ChoiceTestFile.chooseTopic();

module.exports = ChoiceTestFile;
