/* eslint-disable no-param-reassign */

import getRandomInt from '../utils.js';

function getQuestion(progressive) {
  return progressive.join(' ');
}

function getProgressive(startProgress, lengthProgress) {
  const arr = [];
  const countProgres = getRandomInt(1, 9);
  arr[0] = startProgress;
  startProgress = '';
  for (let i = 1; i < lengthProgress; i += 1) {
    arr[i] = arr[i - 1] + countProgres;
  }
  return arr;
}

function runGameProgress() {
  const startProgress = getRandomInt(0, 10);
  const lengthProgress = getRandomInt(5, 10);
  const progressive = getProgressive(startProgress, lengthProgress);
  const randomIndex = getRandomInt(0, progressive.length - 1);
  const elementArr = progressive[randomIndex];
  progressive[randomIndex] = '..';
  const question = getQuestion(progressive);
  const rightAnswer = String(elementArr);
  return [question, rightAnswer];
}

export default runGameProgress;
