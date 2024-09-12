const inquirer = require("inquirer");
const fs = require("fs").promises;
const Test = require("./Test.js");

class ChoiceTestFile {
  static choiceFile() {
    (async () => {
      try {
        inquirer
          .prompt([
            {
              type: "list",
              name: "Choice",
              message: "Выбери тему викторины:",
              choices: [
                { name: "Мир губки боба" },
                { name: "Побег из курятника" },
                { name: "Путешествие на Луну" },
              ],
            },
          ])
          .then((answers) => fs.writeFile("./choice.txt", answers.Choice))
          .then(() => Test.writeFile());
      } catch (error) {
        console.error("Ошибка при чтении файлов:", error);
      }
    })();
  }
}

ChoiceTestFile.choiceFile();

module.exports = ChoiceTestFile;
