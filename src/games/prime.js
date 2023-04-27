import engin, { getRandomNumber } from '../index.js';

const getTrueAnswer = (example) => {
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

const getExample = () => {
  const example = getRandomNumber();

  return [example, getTrueAnswer(example)];
};

const primeGame = () => {
  engin('Answer "yes" if given number is prime. Otherwise answer "no".', getExample);
};

export default primeGame;
