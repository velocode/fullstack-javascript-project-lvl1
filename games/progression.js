import readlineSync from 'readline-sync';
import {
  start, correctAnswer, yourAnswer,
} from '../src/index.js';

const progression = () => {
    const userName = start();

let score = 0;

while (score < 3) {
  console.log('What number is missing in the progression?');
  let firstNumber = Math.floor(Math.random() * 100);
  const count = Math.floor(Math.random() * 5 + 5);
  const indexOfMissingNumber = Math.floor(Math.random() * count);
  const increment = Math.floor(Math.random() * 100);
  const progression = [];
  for (let i = 0; i <= count; i += 1) {
    firstNumber += increment;
    progression.push(firstNumber);
  }
  const missingNumber = progression[indexOfMissingNumber];
  let progressionString = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === missingNumber) {
      progressionString = `${progressionString} ...`;
    } else {
      progressionString = `${progressionString} ${progression[i]}`;
    }
  }

  // console.log(progression);
  console.log(`Question: ${progressionString}`);
  const answer = readlineSync.question('Your answer: ');

  if (parseInt(answer, 10) === missingNumber) {
    correctAnswer();
    score += 1;
    console.log(score);
  } else {
    console.log(`${answer} is wrong answer;(. Correct answer was 
    ${missingNumber}.\nLet's try again ${userName}`);
    break;
  }
}

if (score >= 3) {
  console.log(`Congratulations, ${userName}!`);
}
}
export default progression;
