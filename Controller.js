const inquirer = require('inquirer');
const ChoiceTestFile = require('./Model');
const Test = require('./Test');
const QuestionView = require('./View');

class Controller {
  static points = 0;

  static async startGame() {
    const choice = await ChoiceTestFile.chooseTopic();
    console.log(choice.Choice);
    const questionModelArr = await Test.readAndReturnQuestion(choice.Choice);

    // console.log('questionModelArr', JSON.parse(questionModelArr));
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
      console.log('====>>>>>', Controller.points);
    } catch (error) {
      console.error('Ошибка при чтении файлов:', error);
    }
  }
}

Controller.startGame();

module.exports = Controller;
