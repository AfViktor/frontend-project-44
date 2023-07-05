#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';


const brainEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function getRandom () {
    return Math.round(Math.random()*100);
  };
  console.log(getRandom());

  let randomInt = getRandom();
  
  const getAnswer = () => {
    let answer = readlineSync.question('Your answer: ');
    return answer;
  };
  
  let answer = getAnswer();
  let correctAnswer = 'yes';
  let unCorrectAnswer = 'no';

  if (randomInt % 2 == 0) {
    console.log('correct');
  }

  if (randomInt % 2 === 0) {
    if (answer === correctAnswer){
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${unCorrectAnswer}.`);
    }
  }  
}


export default brainEven;