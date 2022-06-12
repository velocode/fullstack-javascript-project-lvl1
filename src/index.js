import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');

const start = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello ${name}!`);
};
const correctAnswer = () => {
  console.log('Correct!');
};

const answer = readlineSync.question('Your answer: ');

export {
  start, correctAnswer, userName, answer,
};
