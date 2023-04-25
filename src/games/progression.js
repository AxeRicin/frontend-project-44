import * as cli from '../cli.js';
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
  return example.join(' ');
};

const getTrueAnswer = (example) => {
  const exampleArr = example.split(' ');
  let firstNum = exampleArr[0];
  let secondNum = 0;

  for (let i = 1; i < exampleArr.length; i += 1) {
    if (Number.isNaN(firstNum)) {
      firstNum = Number(exampleArr[i]);
    } else {
      secondNum = Number(exampleArr[i]);
    }
    if (Number.isNaN(secondNum)) {
      firstNum = NaN;
    }
    if (firstNum !== secondNum && secondNum !== 0 && !Number.isNaN(secondNum)) {
      i = exampleArr.length;
    }
  }
  return `${secondNum - firstNum}`;
};

const gameProgression = () => {
  const name = cli.seyHello();
  cli.print('What number is missing in the progression?');
  engin(name, getExample, getTrueAnswer);
};

export default gameProgression;
