import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${askName()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandom () {
  return Math.round(Math.random())*10;
};
console.log(getRandom());
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
