import readlineSync from 'readline-sync';

function isEven () {
  let question = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(question);
  let randomInt = Math.round(Math.random() * 100);
  console.log(randomInt);
  //let answer = readlineSync.question('Your answer: ');
  let rightAnswer = '';
  if (randomInt % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  };
  return [question, rightAnswer];
};

export default isEven;