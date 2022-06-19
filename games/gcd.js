import readlineSync from 'readline-sync';
import {
  start, correctAnswer, yourAnswer,
} from '../src/index.js';

const gcd = () => {
    const userName = start();

let score = 0;
const greatestDivisor = (number, number2) => {
  for (let i = number; i >= 1; i -= 1) {
    if (number % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

while (score < 3) {
  console.log('Find the greatest common divisor of given numbers.');
  const number = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const greatDiv = greatestDivisor(number, number2);
  console.log(`Question: ${number} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  if (parseInt(answer, 10) === greatDiv) {
    correctAnswer();
    score += 1;
  } else {
    console.log(`${answer} is wrong answer;(. Correct answer was 
    ${greatDiv}.\nLet's try again ${userName}`);
    break;
  }
}
if (score >= 3) {
  console.log(`Congratulations, ${userName}!`);
}
}
export default gcd;
