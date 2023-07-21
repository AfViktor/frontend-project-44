function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function makeProgress() {
  const progressive = [];
  const countProgres = getRandomArbitrary(1, 9);
  progressive[0] = countProgres;
  for (let i = 1; i < 10; i += 1) {
    progressive[i] = progressive[i - 1] + countProgres;
  }
  return progressive;
}

function replaceElement() {
  const arrProgressiv = makeProgress();
  const randomIndex = getRandomArbitrary(0, arrProgressiv.length - 1);
  const elementArr = arrProgressiv[randomIndex];
  arrProgressiv[randomIndex] = '..';
  return [arrProgressiv, elementArr];
}

export default replaceElement;
