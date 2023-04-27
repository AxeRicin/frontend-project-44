import engin, { getRandomNumber } from '../index.js';

const getMinMaxRandomNum = (min = 5, max = 16) => Math.floor(Math.random() * (max - min) + min);

const getExample = () => {
  const example = [];
  const lengthProgression = getMinMaxRandomNum();
  const startNumber = getRandomNumber(50);
  const progression = getRandomNumber(10);
  const positionUnknown = getMinMaxRandomNum(1, lengthProgression);

  example.push(startNumber);
  for (let i = 1; i <= lengthProgression - 1; i += 1) {
    const lastNumber = example[example.length - 1];
    example.push(lastNumber + progression);
  }
  example[positionUnknown] = '..';
  return [example.join(' '), `${progression}`];
};

const gameProgression = () => {
  engin('What number is missing in the progression?', getExample);
};

export default gameProgression;
