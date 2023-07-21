#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from './cli.js';

function runGame(description, func) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const dataIsFunc = func();
    const question = dataIsFunc[0];
    const rightAnswer = dataIsFunc[1];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer == rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export default runGame;
