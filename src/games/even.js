import * as cli from '../cli.js';
import engin, { getRandomNumber } from '../index.js';

const checkingAnswerCorrect = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const name = cli.seyHello();
  cli.print('Answer "yes" if the number is even, otherwise answer "no".');
  engin(name, getRandomNumber, checkingAnswerCorrect, false);
};

export default evenGame;
