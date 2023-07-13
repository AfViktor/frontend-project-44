#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
import isEven from './games/brainEven.js';

function runGame(description, getRoundGame) {
  for (let i = 0; i <= getRoundGame; i++) {
    isEven();
    let answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      return console.log(`${answer} is wrong. Correct answer was ${rightAnswer}`);
    } else {
      console.log('Correct!');
    };
  };
};

export default runGame;