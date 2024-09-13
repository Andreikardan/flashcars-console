const inquirer = require('inquirer');
const fs = require('fs').promises;

const questionModelArr = [
  {
    message: 'Дуэтом с черепахой песенку «Я на солнышке лежу…» пел?',
    choices: [
      { name: 'рыбка' },
      { name: 'львенок' },
      { name: 'котенок' },
      { name: 'лягушонок' },
    ],
  },
  {
    message: 'Как заканчивается строчка песни из мультфильма «Бременские музыканты»: «Мы своё призванье не забудем, смех и радость мы...»?',
    choices: [
      { name: 'Жертвуем юмористам' },
      { name: 'Жалуем королю' },
      { name: 'Приносим людям' },
      { name: 'Получили от автора' },
    ],
  },
  {
    message: 'Кого в мультфильме "Приключения Винни-Пуха" можно назвать самым печальным героем?',
    choices: [
      { name: 'Винни-Пух' },
      { name: 'Ослик Иа-Иа' },
      { name: 'Пятачок' },
    ],
  },
  {
    message: 'Птичка из мультфильма «Трое из Простоквашино», которая умела говорить «кто там»',
    choices: [
      { name: 'Сорока' },
      { name: 'Галка' },
      { name: 'Курица' },
      { name: 'Сова' },
    ],
  },
  {
    message: 'Как называется улица, на которой живёт кот Леопольд?',
    choices: [
      { name: 'Мурлыкина' },
      { name: 'Мурзилкина' },
      { name: 'Мурмурина' },
      { name: 'Котяткина' },
    ],
  },
];

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

const createdQuestionViews = questionModelArr
  .map((questionModelItem) => new QuestionView(questionModelItem).getObjToPrint());

console.log(createdQuestionViews);

(async () => {
  try {
    inquirer
      .prompt(createdQuestionViews);
  } catch (error) {
    console.error('Ошибка при чтении файлов:', error);
  }
})();
