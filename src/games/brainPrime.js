import randomInt from '/Users/vik/study/hexlet/projects/mindgames/frontend-project-44/src/utils.js';

function isPrime() {
  const number = randomInt(1, 100);
  let question = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      question = `Question: ${number}`;
      return [question, 'no'];
    }
  }
  question = `Question: ${number}`;
  return [question, 'yes'];
}

export default isPrime;
