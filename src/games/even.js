import engin, { getRandomNumber } from '../index.js';

const checkingAnswerCorrect = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getExample = () => {
  const example = getRandomNumber();

  return [example, checkingAnswerCorrect(example)];
};

const evenGame = () => {
  engin('Answer "yes" if the number is even, otherwise answer "no".', getExample);
};

export default evenGame;
