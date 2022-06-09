import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello ${userName}!`);
};
const correctAnswer = () => {
  console.log('Correct!');
};

const userName = readlineSync.question('May I have your name? ');

let answer = readlineSync.question('Your answer: ');



export { start, correctAnswer, userName, answer };
