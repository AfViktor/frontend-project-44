#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from './cli.js';

function runGame(description, getRoundData) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log(description);
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, rightAnswer] = getRoundData();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else { 
      console.log(`${answer} is wrong. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return [description, getRoundData];
}

export default runGame;
