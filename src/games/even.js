import engin from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isAnswerCorrect = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRoundData = () => {
  const question = getRandomNumber();

  return [question, isAnswerCorrect(question)];
};

const evenGame = () => {
  engin('Answer "yes" if the number is even, otherwise answer "no".', getRoundData);
};

export default evenGame;
