const inquirer = require("inquirer");
const fs = require("fs").promises;
const Questions = require("./Questions.js");

class Test {
  static writeFile() {
    (async () => {
      try {
        if (readChoiceFile === "Мир губки боба") {
          Questions.getQuestions();
        }
        inquirer
          .prompt([
            { type: "input", name: "username", message: "Введи имя:" },
            {
              type: "list",
              name: "bonuses",
              message: "На сколько ты опоздал?",
              choices: [
                { name: "Не опаздывал", value: 0 },
                { name: "На 2-3 минутки", value: 2 },
                { name: "Опоздал и не сообщил", value: 5 },
              ],
            },
            {
              type: "rawlist",
              name: "punishment",
              message: "Выбери наказание",
              choices: [
                { name: "Писать неделю на промисах", damage: 10 },
                { name: "Писать неделю рекурсию с регуляркой", damage: 20 },
                { name: "Писать только левой рукой", damage: 5 },
              ],
              when: (answers) => answers.bonuses > 0,
            },
            {
              type: "list",
              name: "fileChoice",
              message: "Выбери файл из списка:",
              choices: [{ name: "Писать неделю на промисах", damage: 10 }],
            },
          ])
          .then((answers) => console.log(answers));
      } catch (error) {
        console.error("Ошибка при чтении файлов:", error);
      }
    })();
  }
}

Test.writeFile();

module.exports = Test;
