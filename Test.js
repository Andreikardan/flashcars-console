const fs = require('fs').promises;

class Test {
  static async readAndReturnQuestion(name) {
    try {
      if (name === 'Общие Знания') {
        const arr = await fs.readFile('./topics/general-knowledge.json', 'utf-8');
        return arr;
      } if (name === 'Правила дорожного движения') {
        const arr = await fs.readFile('./topics/traffic-laws.json', 'utf-8');
        return arr;
      } if (name === 'Мультфильмы') {
        const arr = await fs.readFile('./topics/cartoons-and-movies.json', 'utf-8');
        return arr;
      }
    } catch ({ error }) {
      console.error('Ошибка при чтении файлов:', error);
    }
  }
}

Test.readAndReturnQuestion();

module.exports = Test;
