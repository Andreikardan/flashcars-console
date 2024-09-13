const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const { EOL } = require('os');
const ChoiceTestFile = require('./Model');
const Test = require('./Test');
const QuestionView = require('./View');

class Controller {
  static points = 0;

  static async startGame() {
    const choice = await ChoiceTestFile.chooseTopic();
    console.log(choice.Choice);
    const questionModelArr = await Test.readAndReturnQuestion(choice.Choice);

    const createdQuestionViews = JSON.parse(questionModelArr)
      .map((questionModelItem) => new QuestionView(questionModelItem).getObjToPrint());

    try {
      const answers = await inquirer
        .prompt(createdQuestionViews);
      const answersArray = Object.values(answers);
      createdQuestionViews.forEach((el, index) => {
        const currentAnswer = el.choices.find((choiceVar) => choiceVar.isCorrect);
        if (currentAnswer.isCorrect === true && answersArray[index] === currentAnswer.name) {
          Controller.points += 1;
        }
      });
      console.log('====>>>>>', Controller.points, EOL, chalk.green.bold(figlet.textSync('Thanks for your answers!', { horizontalLayout: 'full' })));
    } catch (error) {
      console.error('Ошибка при чтении файлов:', error);
    }
  }
}

Controller.startGame();

module.exports = Controller;
