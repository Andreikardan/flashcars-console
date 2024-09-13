const ChoiceTestFile = require('./Model');
const Test = require('./Test');

class QuestionView {
  static questionCounter = 0;

  constructor(obj) {
    this.message = obj.message;
    this.choices = obj.choices;
    QuestionView.questionCounter += 1;
  }

  getObjToPrint() {
    const quesObjToPrint = {};
    quesObjToPrint.type = 'list';
    quesObjToPrint.name = `choice-${QuestionView.questionCounter}`;
    quesObjToPrint.message = this.message;
    quesObjToPrint.choices = this.choices;
    return quesObjToPrint;
  }
}

module.exports = QuestionView;
