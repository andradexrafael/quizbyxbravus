const quiz = {};

let currentQuestion = 'quiz-container-1';

const answerFinalStrings = {
  '1': {
    img: 'img/hojenaotafacil.png',
    result: '“Hoje não ta facil, só me traga flores”',
    desc:
      'ta carente na quarentena sem o crush, mas ta tudo bem, em breve tudo isso passa e volta crush, volta amigos!!!',
  },
  '2': {
    img: 'img/naoequalquerum.png',
    result: '“Não é qualquer um que bate na minha raba”',
    desc:
      'personalidade forte, imprevisível e enxerga a realidade de uma forma diferenciada. Oh yeah',
  },
  '3': {
    img: 'img/quedaquiapouco.png',
    result:
      '“Que daqui a pouco eu tenho que ralar, mas vou ralar pensando no que a gente fez”',
    desc: 'ignora o crush mas ta pensando nele, estamos de olho ;)',
  },
  '4': {
    img: 'img/porsinaltupodia.png',
    result: '“Por sinal tu podia ser miss”',
    desc: 'era contatinho, virou crush e ja ta em love. <3 <3',
  },
};

function showQuestion(id) {
  Array.from(
    document.querySelectorAll(
      `[class^=quiz-container]:not(.${currentQuestion})`,
    ),
  ).forEach(element => {
    element.classList.add('hidden');
  });

  const show = document.querySelector(`.${currentQuestion}`);

  if (show) {
    show.classList.remove('hidden');
  }
}

function changeAnswer(event) {
  const {
    dataset: { value, answer },
  } = event.target;

  quiz[answer] = value;
  const nextIndex = Number(answer.split('-')[1]) + 1;
  currentQuestion = `quiz-container-${nextIndex}`;
  showQuestion();

  localStorage.setItem('@GamaQuiz:quiz-answers', JSON.stringify(quiz));

  if (nextIndex === 7) {
    document.querySelector('.form-container').classList.remove('hidden');
  }
}

window.onload = () => {
  Array.from(document.querySelectorAll('.quiz-item')).forEach(element =>
    element.addEventListener('click', changeAnswer),
  );

  localStorage.setItem(
    '@GamaQuiz:quiz-who-you-are',
    JSON.stringify(answerFinalStrings),
  );
};
