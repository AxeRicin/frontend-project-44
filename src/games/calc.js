import startCalcGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const operators = ['+', '-', '*'];

const getOperator = (num) => operators[num];

const getCorrectAnswer = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;

    case '-':
      return operand1 - operand2;

    case '*':
      return operand1 * operand2;

    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const getRoundData = () => {
  const operand1 = getRandomNumber(1, 50);
  const operand2 = getRandomNumber(1, 50);
  const operator = getOperator(Math.floor(Math.random() * operators.length));
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(getCorrectAnswer(operand1, operator, operand2));

  return [question, correctAnswer];
};

export default () => {
  startCalcGame('What is the result of the expression?', getRoundData);
};
