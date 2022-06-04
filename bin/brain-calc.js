#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello ${userName}!`);
let score = 0;

while (score < 3) {
  console.log('What is the result of the expression?');
  const number = Math.floor(Math.random() * 100);
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
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  console.log(result);
  if (answer === result) {
    console.log('Correct!');
    score += 1;
    console.log(score);
  } else {
    console.log(`${answer} is wrong answer;(. Correct answer was 
    ${result}.\nLet's try again ${userName}`);
  }
}
console.log(`Congratulations, ${userName}!`);
