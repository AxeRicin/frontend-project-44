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

  return `${calc(operand1, operand2, operator)}`;
};

const getExample = () => {
  const operand1 = getRandomNumber(50);
  const operand2 = getRandomNumber(50);
  const example = `${operand1} ${getOperator(getRandomNumber(3))} ${operand2}`;

  return [example, getTrueAnswer(example)];
};

const calcGame = () => {
  engin('What is the result of the expression?', getExample);
};

export default calcGame;
