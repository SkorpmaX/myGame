let myGame = {
  cat: [
    {
      name: 'раздел 1',
      '200': {
        'text': 'Вопрос 1',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '300': {
        'text': 'Вопрос 2',
        'answer': {
          '1': 'Вариант ответа 11',
          '2': 'Вариант ответа 22',
          '3': 'Вариант ответа 33',
          'true': '2',
        },
      },
      '600': {
        'text': 'Вопрос 3',
        'answer': {
          '1': 'Вариант ответа 111',
          '2': 'Вариант ответа 222',
          '3': 'Вариант ответа 333',
          'true': '2',
        },
      },
      '800': {
        'text': 'Вопрос 4',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '1000': {
        'text': 'Вопрос 5',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
    },
    {
      name: 'раздел 2',
      '200': {
        'text': 'Вопрос 1',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '300': {
        'text': 'Вопрос 2',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '600': {
        'text': 'Вопрос 3',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '800': {
        'text': 'Вопрос 4',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '1000': {
        'text': 'Вопрос 5',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
    },
    {
      name: 'раздел 3',
      '200': {
        'text': 'Вопрос 1',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '300': {
        'text': 'Вопрос 2',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '600': {
        'text': 'Вопрос 3',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '800': {
        'text': 'Вопрос 4',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
      '1000': {
        'text': 'Вопрос 5',
        'answer': {
          '1': 'Вариант ответа 1',
          '2': 'Вариант ответа 2',
          '3': 'Вариант ответа 3',
          'true': '2',
        },
      },
    }
  ],

  createLine(kat) {
    kat.forEach(function (elem, index) {
      let lineWrap = document.createElement('div');//TODO Сделать отдельную функцию для создания элемента. Параметры: (Родитель, Тэг, Класс)
      $(lineWrap).addClass('lineWrap');
      $('.gameWrap').append(lineWrap);
      let question = document.createElement('div');
      $(lineWrap).append(question);
      $(question).addClass('name').append(elem.name);
      for (let item in elem) {
        if (item == 'name') continue;
        let currentQuestion = document.createElement('div');
        $(currentQuestion).addClass('question-elem');
        $(currentQuestion).attr('data-cat',index);
        $(lineWrap).append(currentQuestion);
        $(currentQuestion).append(item);
      }
    })
  },
  showQuestion(elem){
    let cat = elem.attr('data-cat');
    let question = elem.html();
    let currentQuestion = myGame.cat[cat][question];
    $('.question').html(currentQuestion.text);
    for (let item in currentQuestion.answer) {
      if (item == 'true') continue;
      let currentAnswerWrap = document.createElement('div'); //TODO Сделать отдельную функцию на уровне showFunction() для отрисовки ответа
      $('.var-answer').append(currentAnswerWrap);
      $(currentAnswerWrap).addClass('currentAnswerWrap');
      let currentAnswer = document.createElement('input');
      $(currentAnswerWrap).append(currentAnswer);
      $(currentAnswer).attr('id','question'+item);
      $(currentAnswer).attr('name','answer');
      $(currentAnswer).attr('type','radio');
      $(currentAnswer).val(item);
      let currentAnswerLabel = document.createElement('label');
      $(currentAnswerLabel).attr('for','question'+item);
      $(currentAnswerLabel).html(currentQuestion.answer[item]);
      $(currentAnswerWrap).append(currentAnswerLabel);
    }

    $('.question-wrap').show(300);
  }
};

$(document).ready(function () {
  $('.question-elem').click(function () {
    myGame.showQuestion($(this));
  });

  $('.close').click(function () { //TODO Сделать отдельную функцию на уровне showFunction() для закрытия вопросю
    $('.question-wrap').hide(300);
    $('.currentAnswerWrap').remove();
  });
});


//TODO 1) Сделать функционал для кнопки "ответ" 2) Сделать счётчик на базе localStorage 3) Сделать маркировку уже сыгранного вопроса. (хранить state игры в localStorage)
myGame.createLine(myGame.cat);