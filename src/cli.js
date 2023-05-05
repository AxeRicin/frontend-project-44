import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const seyHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { askQuestion, seyHello };
