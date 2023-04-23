#!/usr/bin/env node

import { askQuestion, print } from '../src/cli.js';

const maxNum = 100;

const getRandomNumber = () => Math.floor(Math.random() * maxNum + 1);

const checkingAnswerCorrect = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = (name = 'Bill') => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = askQuestion('Your answer: ');
    const answerCorrect = checkingAnswerCorrect(number);

    if (answer === answerCorrect) {
      print('Correct!');
    } else {
      print(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      return print(`Let's try again, ${name}`);
    }
  }
  return print(`Congratulations, ${name}!`);
};

evenGame();
