#!/usr/bin/env node

import readlineSync, { question } from 'readline-sync';
import askName from '../src/cli.js';
import isEven from './games/brainEven.js';


function runGame(description, getRoundGame) {
  let name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < getRoundGame; i++) {
    let dataIsEven = isEven();
    let correctAnswer = dataIsEven[1];
    let randomInt = dataIsEven[0];
    console.log(randomInt);
    let answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return console.log(`${answer} is wrong. Correct answer was ${correctAnswer}. Try again ${name}`);
    } else {
      console.log('Correct!');
    };
    if (i === 2) {
      console.log(`Congratulations, ${name}`);
    }
  };
};

export default runGame;