const inquirer = require('inquirer');
const fs = require('fs').promises;
const Test = require('./Test.js');




class ChoiceTestFile {
  static choiceFile() {
    (async () => {
      try {
        inquirer
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
          ])
          .then((answers) => Test.writeFile(answers.Choice));
      } catch ({ error }) {
        console.error('Ошибка при чтении файлов:', error);
      }
    })();
  }
}

ChoiceTestFile.choiceFile();

module.exports = ChoiceTestFile;
