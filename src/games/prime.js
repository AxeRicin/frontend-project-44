import engin from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isCorrectAnswer = (example) => {
  let count = 0;

  if (example === 1) {
    return 'no';
  }

  for (let i = 1; i <= example; i += 1) {
    if (example % i === 0) {
      count += 1;
    }
    if (count > 2) {
      return 'no';
    }
  }
  return 'yes';
};

const getRoundData = () => {
  const question = getRandomNumber();

  return [question, isCorrectAnswer(question)];
};

const primeGame = () => {
  engin('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData);
};

export default primeGame;
