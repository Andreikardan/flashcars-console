const inquirer = require('inquirer');
const fs = require('fs').promises;



class Test {
  static writeFile(name) {

    async () => {
      try {
        console.log(name);

      } catch ({error}) {
        console.error('Ошибка при чтении файлов:', error);
      }
    };
  }
}

Test.writeFile();

module.exports = Test;
