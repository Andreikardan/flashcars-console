const inquirer = require('inquirer');
const fs = require('fs').promises;
const Test = require('./Test.js');

class ChoiceTestFile {
  static async chooseTopic() {
    try {
      const result = await inquirer
        .prompt([
          {
            type: 'list',
            name: 'Choice',
            message: 'Выбери тему викторины:',
            choices: [
              { name: 'Общие Знания' },
              { name: 'Правила дорожного движения' },
              { name: 'Мультфильмы' },
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
