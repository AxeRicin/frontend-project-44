import * as cli from '../cli.js';
import engin, { getRandomNumber } from '../index.js';



const findMaxDivisor = (coll1, coll2) => {
  let acc = 0;

  for (let i = 0; i < coll1.length; i += 1) {
    if (coll2.indexOf(coll1[i]) !== -1) {
      acc = coll1[i];
    }
  }

  return `${acc}`;
};

const getDivisorsOperand = (operand) => {
  const collDevisorOperand = [];
  for (let i = 0; i <= operand; i += 1) {
    if (operand % i === 0) {
      collDevisorOperand.push(i);
    }
  }
  return collDevisorOperand;
};

const getTrueAnswer = (example) => {
  const [operand1, operand2] = example.split(' ');
  const collDevisorOperand1 = getDivisorsOperand(operand1);
  const collDevisorOperand2 = getDivisorsOperand(operand2);

  return findMaxDivisor(collDevisorOperand1, collDevisorOperand2);
};

const getExample = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const example = `${num1} ${num2}`;

  return [example, getTrueAnswer(example)];
};

const dcdGame = () => {
  engin('Find the greatest common divisor of given numbers.', getExample);
};

export default dcdGame;
