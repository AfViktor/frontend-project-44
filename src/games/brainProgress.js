/* eslint-disable no-param-reassign */

import getRandomInt from '../utils.js';

function getQuestion(progressive) {
  return progressive.join(' ');
}

function getProgression(startValue, step, length) {
  const arr = [];
  arr[0] = startValue;
  for (let i = 1; i < length; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
}

function runGameProgress() {
  const startValue = getRandomInt(0, 10);
  const length = getRandomInt(5, 10);
  const step = getRandomInt(1, 10);
  const progressive = getProgression(startValue, step, length);
  const randomIndex = getRandomInt(0, progressive.length - 1);
  const elementArr = progressive[randomIndex];
  progressive[randomIndex] = '..';
  const question = getQuestion(progressive);
  const rightAnswer = String(elementArr);
  return [question, rightAnswer];
}

export default runGameProgress;
