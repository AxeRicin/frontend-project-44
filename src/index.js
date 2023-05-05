import * as cli from './cli.js';

export default (description, getRoundData) => {
  const numberRounds = 3;
  const name = cli.seyHello();
  console.log(description);
  for (let i = 0; i < numberRounds; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const answer = cli.askQuestion('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
