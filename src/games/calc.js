import * as cli from '../cli.js';
import engin, { getRandomNumber } from '../index.js';

const getOperator = (num) => {
  switch (num) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const getExample = () => {
  const operand1 = getRandomNumber(50);
  const operand2 = getRandomNumber(50);

  return `${operand1} ${getOperator(getRandomNumber(3))} ${operand2}`;
};

const calc = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return Number(operand1) + Number(operand2);

    case '-':
      return Number(operand1) - Number(operand2);

    default:
      return Number(operand1) * Number(operand2);
  }
};

const getTrueAnswer = (example) => {
  const [operand1, operand2, operator] = example.split(' ');

  return calc(operand1, operand2, operator);
};

const calcGame = () => {
  const name = cli.seyHello();
  cli.print('What is the result of the expression?');
  engin(name, getExample, getTrueAnswer);
};

export default calcGame;
