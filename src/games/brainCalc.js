function isEvenCalc () {
  let number1 = Math.round(Math.random() * 10);
  let number2 = Math.round(Math.random() * 10);
  let sum = number1 + number2;
  return [number1, number2, sum];
};

export default isEvenCalc;