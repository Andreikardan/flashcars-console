const ChoiceTestFile = require('./Model');
const Test = require('./Test');
const Controller = require('./Controller');

class QuestionView {
  static questionCounter = 0;

  constructor(obj) {
    this.message = obj.message;
    this.choices = obj.choices;
    this.currentAnswer = obj.choices.find((el) => el.isCorrect === true)?.name;
    QuestionView.questionCounter += 1;
  }

  getObjToPrint() {
    const quesObjToPrint = {};
    quesObjToPrint.type = 'rawlist';
    quesObjToPrint.name = `choice-${QuestionView.questionCounter}`;
    quesObjToPrint.message = this.message;
    quesObjToPrint.choices = this.choices;
    return quesObjToPrint;
  }
}

module.exports = QuestionView;
