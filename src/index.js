#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from './cli.js';

import replaceElement from './games/brainProgres.js';
import isPrime from './games/brainPrime.js';

function runGame(description, func) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log(description);
  //description = "Answer \"yes\" if the number is even, otherwise answer \"no\".";
  for (let i = 0; i < 3; i += 1) {
    const dataIsFunc = func();
    const question = dataIsFunc[0];
    const rightAnswer = dataIsFunc[1];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      return console.log(`${answer} is wrong. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    } else {
      console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export { runGame };

function runGameProgressiv(description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?   ');
  for (let i = 0; i < getRoundGame; i++) {
    const dataProgressive = replaceElement();
    const showProgressive = dataProgressive[0].join(' ');
    const rightAnswer = dataProgressive[1];
    console.log(`Question: ${showProgressive}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== rightAnswer) {
      return console.log(`'${answer}' is wrong. Correct answer was '${rightAnswer}'.\n Let's try again, ${name}!`);
        } else {
          console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export { runGameProgressiv }

