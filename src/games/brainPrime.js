function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function isPrime() {
  const number = getRandomArbitrary(1, 100);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return [number, 'no'];
  }
  return [number, 'yes'];
}

export default isPrime;
