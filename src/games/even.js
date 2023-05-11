import startEvenGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getRoundData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startEvenGame('Answer "yes" if the number is even, otherwise answer "no".', getRoundData);
};
