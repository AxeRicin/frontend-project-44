import startPrimeGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isPrimeNumber = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startPrimeGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData);
};
