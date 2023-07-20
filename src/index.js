#!/usr/bin/env node

import readlineSync, { question } from 'readline-sync';
import askName from '../src/cli.js';
import isEven from '../src/games/brainEven.js';
import { isEvenSum, isEvenSubtract, isEvenMulti, randomInt } from "../src/games/brainCalc.js";
import { isEvenNod, getDivider } from "../src/games/brainNod.js"
import { replaceElement } from "../src/games/brainProgres.js";
import { isPrime } from "../src/games/brainPrime.js"

function runGameBrainEven(description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  let name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < getRoundGame; i++) {
    let dataIsEven = isEven();
    let correctAnswer = dataIsEven[1];
    let randomInt = dataIsEven[0];
    console.log(`Question: ${randomInt}`);
    let answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return console.log(`${answer} is wrong. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
    } else {
      console.log('Correct!');
    };
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  };
};

function runGameCalc (description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  let name = askName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < getRoundGame; i++) {
    let counter = randomInt(1,3);
    switch(counter) {
    case 1: 
      let dataIsEvenSum = isEvenSum();
      console.log(`Question: ${dataIsEvenSum[0]} + ${dataIsEvenSum[1]}`);
      let answerSum = Number(readlineSync.question('Your answer: '));
      if (answerSum !== dataIsEvenSum[2]) {
        return console.log(`${answerSum} is wrong. Correct answer was ${dataIsEvenSum[2]}.\nLet's try again, ${name}!`);
      } else {
        console.log('Correct!');
      };
      break;
    case 2:
      let dataIsEvenSubtract = isEvenSubtract();
      console.log(`Question: ${dataIsEvenSubtract[0]} - ${dataIsEvenSubtract[1]}: `);
      let answerSubtract = Number(readlineSync.question('Your answer: '));
      if (answerSubtract !== dataIsEvenSubtract[2]) {
        return console.log(`${answerSubtract} is wrong. Correct answer was ${dataIsEvenSubtract[2]}.\nLet's try again, ${name}!`);
      } else {
        console.log('Correct!');
      };
      break;
    case 3:
      let dataIsEvenMulti = isEvenMulti();
      console.log(`Question: ${dataIsEvenMulti[0]} * ${dataIsEvenMulti[1]}: `);
      let answerMulti = Number(readlineSync.question('Your answer: '));
      if (answerMulti !== dataIsEvenMulti[2]) {
        return console.log(`${answerMulti} is wrong. Correct answer was ${dataIsEvenMulti[2]}.\nLet's try again, ${name}!`);
      } else {
        console.log('Correct!');
      };
      break;
  }; 
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }    
  };
};

export { runGameBrainEven, runGameCalc};

function runGameNode (description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  let name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < getRoundGame; i++) {
    let dataIsEvenNod = isEvenNod();
    let a = dataIsEvenNod[0];
    let b = dataIsEvenNod[1];
    let divider = getDivider(a, b);
    console.log(`Question: ${a} ${b}`);
    let answer = Number(readlineSync.question('Your answer: '));
    if (answer !== divider) {
      return console.log(`${answer} is wrong. Correct answer was ${divider}. \nLet's try again, ${name}!`);
        } else {
          console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export { runGameNode }

function runGameProgressiv (description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  let name = askName();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?   ');
  for (let i = 0; i < getRoundGame; i++) {
    let dataProgressive = replaceElement();
    let showProgressive = dataProgressive[0].join(' ');
    let rightAnswer = dataProgressive[1];
    console.log(`Question: ${showProgressive}`);
    let answer = Number(readlineSync.question('Your answer: '));
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

function gameIsPrime (description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  let name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < getRoundGame; i++) {
    let dataIsPrime = isPrime();
    let showNumber = dataIsPrime[0];
    let rightAnswer = dataIsPrime[1];
    console.log(`Question: ${showNumber}`);
    let answer = readlineSync.question('Your answer: ');
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

export { gameIsPrime }