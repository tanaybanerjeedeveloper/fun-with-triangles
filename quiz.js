const quizForm = document.querySelector('.quiz-form');
const btn = document.querySelector('#btn');
const outputBlock = document.querySelector('#output-block');

const correctAnswers = ['90°', 'right angled'];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }

  outputBlock.innerText = `Your score is ${score}`;
};

btn.addEventListener('click', calculateScore);
