import randomInt from '../src/utils.js';

function isEven() {
  let question = '';
  const number = randomInt(0, 10);
  let rightAnswer = '';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  question = `Question: ${number}`;
  return [question, rightAnswer];
}

export default isEven;
