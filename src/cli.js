import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const print = (str) => {
  console.log(str);
};

const seyHello = () => {
  print('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  print(`Hello, ${name}!`);
};

export { askQuestion, seyHello, print };
