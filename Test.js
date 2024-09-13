const inquirer = require('inquirer');
const fs = require('fs').promises;

class Test {
  static writeFile(name) {
    (async () => {
      try {
        if (name === 'Общие Знания') {
          const newPath = await fs.readFile('./topics/general-knowledge.txt', 'utf-8');
          return newPath;
        } if (name === 'Правила дорожного движения') {
          const newPath = await fs.readFile('./topics/traffic-laws.txt', 'utf-8');
          return newPath;
        } if (name === 'Мультфильмы') {
          const newPath = await fs.readFile('./topics/cartoons-and-movies.txt', 'utf-8');
          return newPath;
        }
      } catch ({ error }) {
        console.error('Ошибка при чтении файлов:', error);
      }
    })();
  }
}

Test.writeFile();

module.exports = Test;
