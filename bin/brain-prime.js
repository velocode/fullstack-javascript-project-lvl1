#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  start, correctAnswer,
} from '../src/index.js';

start();
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!`);

let score = 0;

const isPrime = (number) => {
  let prime = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

while (score < 3) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = Math.floor(Math.random() * 100);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (isPrime(number)) {
    if (answer === 'yes') {
      correctAnswer();
      score += 1;
      console.log(score);
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer 
        is prime.\nLet's try again ${userName}`);
      break;
    }
  } else if (answer === 'no') {
    correctAnswer();
    score += 1;
    console.log(score);
  } else {
    console.log(`${answer} is wrong answer;(. Correct answer 
            is not prime.\nLet's try again ${userName}`);
    break;
  }
}
if (score >= 3) {
  console.log(`Congratulations, ${userName}!`);
}
