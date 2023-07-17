function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function isPrime () {
  let number = getRandomArbitrary(1, 100);
  if (number %  1 === 0 && number % number === 1) {
    return [number, 'yes'];
  } else {
    return [number, 'no'];
  }
}

export { isPrime }
