import randomInt from '../utils.js';

function isCalc() {
  let question = '';
  let rightAnswer = '';
  const number1 = randomInt(0, 10); 
  const number2 = randomInt(0, 10);
  const counter = randomInt(1, 3);
  if (counter === 1) {
    rightAnswer = String(number1 + number2);
    question = `Question: ${number1} + ${number2}`;
  } else if (counter === 2) {
    rightAnswer = String(number1 - number2);
    question = `Question: ${number1} - ${number2}`;
  } else {
    rightAnswer = String(number1 * number2);
    question = `Question: ${number1} * ${number2}`;
  }
  return [question, rightAnswer];
}

export default isCalc;
