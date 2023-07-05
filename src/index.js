#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const brainEven = () => {
  let name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i++){
    function getRandom () {
      return Math.round(Math.random()*100);
    };
  
    let randomInt = getRandom();
    console.log(randomInt);
    
    const getAnswer = () => {
      let answer = readlineSync.question('Your answer: ');
      return answer;
    };
    
    let answer = getAnswer();
    let correctAnswer = '';
  
    if (randomInt % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (answer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    }
    console.log(`Congratulations, ${name}`);
  }
}
  
export default brainEven;