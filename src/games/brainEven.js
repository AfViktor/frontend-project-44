import randomInt from '/Users/vik/study/hexlet/projects/mindgames/frontend-project-44/src/utils.js'

function isEven() {
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
  const question = '';
  const number = randomInt(0, 10)
  let rightAnswer = '';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  question = `Question: ${number}`;
  return [question, rightAnswer];
}

export default isEven;
