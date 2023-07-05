#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${askName()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i++) {
  function getRandom () {
    let randomInt = Math.round(Math.random()*100);
    return randomInt;
  };
  console.log(getRandom());
  
  const getAnswer = () => {
    let answer = readlineSync.question('Your answer: ');
    return answer;
  };
  
  getAnswer();
  
  if (getRandom() % 2 === 0) {
    if (answer === 'yes'){
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${notEven}.`);
    }
  }  
}
