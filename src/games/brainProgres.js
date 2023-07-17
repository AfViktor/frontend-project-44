function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function makeProgress () {
  let progressive = [];
  let countProgres = getRandomArbitrary(1, 9);
  progressive[0] = countProgres;
  for (let i = 1; i < 10; i++) {
    progressive[i] = progressive[i-1] + countProgres;
    
  }
  return progressive;
}

function replaceElement () {
  let arrProgressiv = makeProgress();
  let randomIndex = getRandomArbitrary(0, arrProgressiv.length - 1);
  let elementArr = arrProgressiv[randomIndex];
  arrProgressiv[randomIndex] = '..';
  return [arrProgressiv, elementArr];
}

export { replaceElement }