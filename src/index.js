import * as cli from './cli.js';

export const getRandomNumber = (maxNum = 100) => Math.floor(Math.random() * maxNum + 1);

export default (description, gameRule) => {
  const name = cli.seyHello();
  cli.print(description);
  for (let i = 0; i < 3; i += 1) {
    const [example, TrueAnswer] = gameRule();
    cli.print(`Question: ${example}`);
    const answer = cli.askQuestion('Your answer: ');

    if (answer === TrueAnswer) {
      cli.print('Correct!');
    } else {
      cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${TrueAnswer}'.`);
      return cli.print(`Let's try again, ${name}!`);
    }
  }
  return cli.print(`Congratulations, ${name}!`);
};
