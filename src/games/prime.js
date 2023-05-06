import engin from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isCorrectAnswer = (num) => {
  let answer = num === 1 ? 'no' : 'yes';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
  }
  return answer;
};

const getRoundData = () => {
  const question = getRandomNumber();

  return [question, isCorrectAnswer(question)];
};

const primeGame = () => {
  engin('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData);
};

export default primeGame;
