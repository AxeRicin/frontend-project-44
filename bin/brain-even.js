#!/usr/bin/env node

import { askQuestion, print } from '../src/cli.js';

const maxNum = 100;

const getRandomNumber = () => Math.floor(Math.random() * maxNum + 1);

const evenGame = (name = 'Bill') => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = askQuestion('Your answer: ');

    if (number % 2 === 0) {
      if (answer === 'yes') {
        print('Correct!');
      } else {
        print("'no' is wrong answer ;(. Correct answer was 'yes'.");
        return print(`Let's try again, ${name}`);
      }
    } else if (answer === 'no') {
      print('Correct!');
    } else {
      print("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return print(`Let's try again, ${name}`);
    }
  }
  return print(`Congratulations, ${name}!`);
};

evenGame();
