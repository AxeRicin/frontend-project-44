import engin from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getOperator = (num) => {
  const operators = ['+', '-', '*'];
  return operators[num];
};

const getCorrectAnswer = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return `${Number(operand1) + Number(operand2)}`;

    case '-':
      return `${Number(operand1) - Number(operand2)}`;

    default:
      return `${Number(operand1) * Number(operand2)}`;
  }
};

const getRoundData = () => {
  const operand1 = getRandomNumber(1, 50);
  const operand2 = getRandomNumber(1, 50);
  const operator = getOperator(getRandomNumber(0, 2));
  const question = `${operand1} ${operator} ${operand2}`;

  return [question, getCorrectAnswer(operand1, operator, operand2)];
};

const calcGame = () => {
  engin('What is the result of the expression?', getRoundData);
};

export default calcGame;
