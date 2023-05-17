import startProgressionGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = (startNumber, lengthProgression, stepProgression) => {
  const question = [];
  question.push(startNumber);

  for (let i = 1; i <= lengthProgression - 1; i += 1) {
    const lastNumber = question[question.length - 1];
    question.push(lastNumber + stepProgression);
  }

  return question;
};

const getRoundData = () => {
  const lengthProgression = getRandomNumber(5, 16);
  const startNumber = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(1, 10);
  const question = getProgression(startNumber, lengthProgression, stepProgression);
  const positionUnknown = getRandomNumber(0, question.length - 1);
  const correctAnswer = String(question[positionUnknown]);

  question[positionUnknown] = '..';
  return [question.join(' '), correctAnswer];
};

export default () => {
  startProgressionGame('What number is missing in the progression?', getRoundData);
};
