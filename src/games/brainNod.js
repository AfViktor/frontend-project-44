import randomInt from '../utils.js';

function isEvenNod() {
  const number1 = randomInt(1, 10);
  const number2 = randomInt(1, 10);
  let question = '';
  let rightAnswer = '';
  function getDivider(a, b) {
  if (b === 0) {
    return a;
  }
  return getDivider(b, a % b);
}
  rightAnswer = String(getDivider(number1, number2));
  question = `Question: ${number1} ${number2}`;
  return [question, rightAnswer];
}

export default isEvenNod;
