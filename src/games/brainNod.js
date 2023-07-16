function isEvenNod () {
  let number1 = Math.round(Math.random() * 10);
  let number2 = Math.round(Math.random() * 10);
  return [number1, number2];
}

function getDivider (a, b) {
  if (b === 0) {
    return a;
  }
  return getDivider(b, a % b);
}

export { isEvenNod, getDivider }