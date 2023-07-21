import randomInt from '../utils.js';

function makeProgress() {
  const progressive = [];
  const countProgres = randomInt(1, 9);
  let question = '';
  let rightAnswer = '';
  progressive[0] = countProgres;
  for (let i = 1; i < 10; i += 1) {
    progressive[i] = progressive[i - 1] + countProgres;
  }
  const randomIndex = randomInt(0, progressive.length - 1);
  const elementArr = progressive[randomIndex];
  progressive[randomIndex] = '..';
  question = `Question: ${progressive.join(' ')}`;
  rightAnswer = String(elementArr);
  return [question, rightAnswer];
}

export default makeProgress;
