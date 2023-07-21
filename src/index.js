#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from './cli.js';
import isEven from './games/brainEven.js';
import {
  isEvenSum, isEvenSubtract, isEvenMulti, randomInt,
} from './games/brainCalc.js';
import {
  isEvenNod, getDivider,
} from './games/brainNod.js';
import replaceElement from './games/brainProgres.js';
import isPrime from './games/brainPrime.js';

function runGameBrainEven(description, func) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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

function runGameCalc(description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < getRoundGame; i += 1) {
    const counter = randomInt(1, 3);
    switch (counter) {
      case 1:
        const dataIsEvenSum = isEvenSum();
        console.log(`Question: ${dataIsEvenSum[0]} + ${dataIsEvenSum[1]}`);
        const answerSum = Number(readlineSync.question('Your answer: '));
        if (answerSum !== dataIsEvenSum[2]) {
          return console.log(`${answerSum} is wrong. Correct answer was ${dataIsEvenSum[2]}.\nLet's try again, ${name}!`);
        } else {
          console.log('Correct!');
        }
        break;
      case 2:
        const dataIsEvenSubtract = isEvenSubtract();
        console.log(`Question: ${dataIsEvenSubtract[0]} - ${dataIsEvenSubtract[1]}: `);
        const answerSubtract = Number(readlineSync.question('Your answer: '));
        if (answerSubtract !== dataIsEvenSubtract[2]) {
          return console.log(`${answerSubtract} is wrong. Correct answer was ${dataIsEvenSubtract[2]}.\nLet's try again, ${name}!`);
        } else {
          console.log('Correct!');
        }
        break;
      case 3:
        const dataIsEvenMulti = isEvenMulti();
        console.log(`Question: ${dataIsEvenMulti[0]} * ${dataIsEvenMulti[1]}: `);
        const answerMulti = Number(readlineSync.question('Your answer: '));
        if (answerMulti !== dataIsEvenMulti[2]) {
          return console.log(`${answerMulti} is wrong. Correct answer was ${dataIsEvenMulti[2]}.\nLet's try again, ${name}!`);
        } else {
          console.log('Correct!');
        }
        break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export {
  runGameBrainEven, runGameCalc,
};

function runGameNode(description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < getRoundGame; i += 1) {
    const dataIsEvenNod = isEvenNod();
    const a = dataIsEvenNod[0];
    const b = dataIsEvenNod[1];
    const divider = getDivider(a, b);
    console.log(`Question: ${a} ${b}`);
    const answer = Number(readlineSync.question('Your answer: '));
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

function gameIsPrime (description, getRoundGame) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < getRoundGame; i += 1) {
    const dataIsPrime = isPrime();
    const showNumber = dataIsPrime[0];
    const rightAnswer = dataIsPrime[1];
    console.log(`Question: ${showNumber}`);
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

export { gameIsPrime };
