import {
    start, correctAnswer, answer, userName,
  } from '../src/index.js';
import random from '../src/utils/random.js'
import readlineSync from 'readline-sync';

const even = () => {
    start();

let score = 0;
let result;
while (score < 3) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (number % 2 === 0) {
    result = 'yes';
    if (answer === 'yes') {
      correctAnswer();
      score += 1;
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was 
            ${result}.\nLet's try again ${userName}`);
    }
  } else if (number % 2 === 1) {
    result = 'no';
    if (answer === 'no') {
      correctAnswer();
      score += 1;
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was 
            ${result}.\nLet's try again ${userName}`);
      break;
    }
  }
}
if (score >= 3) {
  console.log(`Congratulations, ${userName}!`);
}
}
export default even;