//import { question } from 'readline-sync';
import getRandomInt from '../utils.js';

function getQuestion(counter, number1, number2) {
  let question = '';
  switch(counter) {
    case 1:
      question = `Question: ${number1} + ${number2}`;
      break;
    case 2:
      question = `Question: ${number1} - ${number2}`;
      break;
    case 3:
      question = `Question: ${number1} * ${number2}`;
  }
  return question;
}

function runGameCalc() {
  let question = '';
  let rightAnswer = '';
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const counter = getRandomInt(1, 3);
  switch (counter) {
    case 1: 
      rightAnswer = String(number1 + number2);
      question = getQuestion(1, number1, number2);
      break;
    case 2:
      rightAnswer = String(number1 - number2);
      question = getQuestion(2, number1, number2);
      break;
    case 3:
      rightAnswer = String(number1 * number2);
      question = getQuestion(3, number1, number2);
  }
  // if (counter === 1) {
  //   rightAnswer = String(number1 + number2);
  //   question = getQuestion(1, number1, number2);
  // } else if (counter === 2) {
  //   rightAnswer = String(number1 - number2);
  //   question = getQuestion(2, number1, number2);
  // } else {
  //   rightAnswer = String(number1 * number2);
  //   question = getQuestion(3, number1, number2);
  // }
  return [question, rightAnswer];
}

export default runGameCalc;
