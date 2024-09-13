const inquirer = require('inquirer');
const ChoiceTestFile = require('./Model');
const Test = require('./Test');
const QuestionView = require('./View');

class Controller {
  static async startGame() {
    const choice = await ChoiceTestFile.chooseTopic();
    console.log(choice.Choice);
    const questionModelArr = await Test.readAndReturnQuestion(choice.Choice);

    // console.log('questionModelArr', JSON.parse(questionModelArr));
    const createdQuestionViews = JSON.parse(questionModelArr)
      .map((questionModelItem) => new QuestionView(questionModelItem).getObjToPrint());

    (async () => {
      try {
        inquirer
          .prompt(createdQuestionViews);
      } catch (error) {
        console.error('Ошибка при чтении файлов:', error);
      }
    })();
  }
}

Controller.startGame();
