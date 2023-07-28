/* eslint-disable no-param-reassign */

import getRandomInt from '../utils.js';

function getRightAnswer(number1, number2, arithmeticOperations) {
  switch (arithmeticOperations) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error('Ошибка в выборе математической операции');
  }
}

function runGameCalc() {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const symbolOperations = ['+', '-', '*'];
  const index = getRandomInt(0, 2);
  const arithmeticOperations = symbolOperations[index];
  const rightAnswer = getRightAnswer(number1, number2, arithmeticOperations);
  const question = `${number1} ${arithmeticOperations} ${number2}`;
  return [question, rightAnswer];
}

export default runGameCalc;
