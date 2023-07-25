import getRandomInt from '../utils.js';

function getQuestion(progressive) {
  return `Question: ${progressive.join(' ')}`;
}

function getProgressive() {
  const arr = [];
  const countProgres = getRandomInt(1, 9);
  arr[0] = countProgres;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + countProgres;
  }
  return arr;
}

function runGameProgress() {
  let question = '';
  let rightAnswer = '';
  let progressive = getProgressive();
  const randomIndex = getRandomInt(0, progressive.length - 1);
  const elementArr = progressive[randomIndex];
  progressive[randomIndex] = '..';
  question = getQuestion(progressive);
  rightAnswer = String(elementArr);
  return [question, rightAnswer];
}

export default runGameProgress;
