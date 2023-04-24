import * as cli from './cli.js';

export const getRandomNumber = (maxNum = 100) => Math.floor(Math.random() * maxNum + 1);

export default (name, gameRule, getTrueAnswer, convertAnswerToNumber = true) => {
  for (let i = 0; i < 3; i += 1) {
    const rule = gameRule();
    const answerCorrect = getTrueAnswer(rule);
    cli.print(`Question: ${rule}`);
    let answer = cli.askQuestion('Your answer: ');

    if (convertAnswerToNumber) {
      answer = Number.isNaN(Number(answer)) ? answer : Number(answer);
    }

    if (answer === answerCorrect) {
      cli.print('Correct!');
    } else {
      cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      return cli.print(`Let's try again, ${name}`);
    }
  }
  return cli.print(`Congratulations, ${name}!`);
};
