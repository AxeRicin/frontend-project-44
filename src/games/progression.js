import engin from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = (startNumber, lengthProgression, progression) => {
  const question = [];
  question.push(startNumber);

  for (let i = 1; i <= lengthProgression - 1; i += 1) {
    const lastNumber = question[question.length - 1];
    question.push(lastNumber + progression);
  }

  return question;
};

const getRoundData = () => {
  const lengthProgression = getRandomNumber(5, 16);
  const startNumber = getRandomNumber(1, 100);
  const progression = getRandomNumber(1, 10);
  const positionUnknown = getRandomNumber(1, lengthProgression);
  const question = getProgression(startNumber, lengthProgression, progression);
  const correctAnswer = question[positionUnknown];

  question[positionUnknown] = '..';
  return [question.join(' '), `${correctAnswer}`];
};

const gameProgression = () => {
  engin('What number is missing in the progression?', getRoundData);
};

export default gameProgression;
