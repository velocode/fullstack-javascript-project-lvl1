import {
    start, correctAnswer, answer, userName,
  } from '../src/index.js';
import random from '../src/utils/random.js'

const calc = () => {
    const beginning = () => {
    start();
  };
  
  let score = 0;
  
  while (score < 3) {
    console.log('What is the result of the expression?');
    const number = random;
    const number2 = Math.floor(Math.random() * 100);
    const numberForOperator = Math.floor(Math.random() * 3);
    let operator;
    let result = 0;
    switch (numberForOperator) {
      case 0:
        operator = '+';
        result = number + number2;
        break;
      case 1:
        operator = '-';
        result = number - number2;
        break;
      case 2:
        operator = '*';
        result = number * number2;
        break;
      default:
    }
    console.log(`Question: ${number}${operator}${number2}`);
    const answer2 = parseInt(answer, 10);
    console.log(result);
    if (answer === result) {
      correctAnswer();
      score += 1;
      console.log(score);
    } else {
      console.log(`${answer2} is wrong answer;(. Correct answer was 
      ${result}.\nLet's try again ${userName}`);
      break;
    }
  }
  if (score >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default calc;
