import startDcdGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getDcd = (num1, num2) => {
  let operand1 = num1;
  let operand2 = num2;

  while (operand1 !== operand2) {
    if (operand1 > operand2) {
      operand1 -= operand2;
    }
    if (operand2 > operand1) {
      operand2 -= operand1;
    }
  }

  return operand1;
};

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = `${getDcd(num1, num2)}`;

  return [question, correctAnswer];
};

export default () => {
  startDcdGame('Find the greatest common divisor of given numbers.', getRoundData);
};
