/* eslint-disable no-param-reassign */

import getRandomInt from '../utils.js';

function getQuestion(symbol, number1, number2) {
  let question = '';
  const mathOperation = symbol;
  switch (mathOperation) {
    case '+':
      question = `${number1} + ${number2}`;
      break;
    case '-':
      question = `${number1} - ${number2}`;
      break;
    case '*':
      question = `${number1} * ${number2}`;
      break;
    default:
      throw new Error('error text');
  }
  return question;
}

function runGameCalc() {
  let question = '';
  let rightAnswer = '';
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  let arithmeticOperations = ['+', '-', '*'];
  const index = getRandomInt(0, 2);
  arithmeticOperations = arithmeticOperations[index];
  switch (arithmeticOperations) {
    case '+':
      rightAnswer = String(number1 + number2);
      question = getQuestion('+', number1, number2);
      break;
    case '-':
      rightAnswer = String(number1 - number2);
      question = getQuestion('-', number1, number2);
      break;
    case '*':
      rightAnswer = String(number1 * number2);
      question = getQuestion('*', number1, number2);
      break;
    default:
      throw new Error('error text');
  }
  return [question, rightAnswer];
}

export default runGameCalc;
