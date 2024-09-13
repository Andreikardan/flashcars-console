const inquirer = require('inquirer');
const fs = require('fs').promises;

class Test {
  static readAndReturnQuestion(name) {
    (async () => {
      try {
        if (name === 'Общие Знания') {
          const arr = await fs.readFile('./topics/general-knowledge.txt', 'utf-8');
          return arr;
        } if (name === 'Правила дорожного движения') {
          const arr = await fs.readFile('./topics/traffic-laws.txt', 'utf-8');
          return arr;
        } if (name === 'Мультфильмы') {
          const arr = await fs.readFile('./topics/cartoons-and-movies.txt', 'utf-8');
          return arr;
        }
      } catch ({ error }) {
        console.error('Ошибка при чтении файлов:', error);
      }
    })();
  }
}

Test.readAndReturnQuestion();

module.exports = Test;
