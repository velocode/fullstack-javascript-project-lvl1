import userName from '../src/cli.js';
import readlineSync from 'readline-sync';

const start = (userName) => {
    console.log("Welcome to the Brain Games!");
    console.log('Hello ' + userName + '!');
    let score = 0;
};

const answer = readlineSync.question('Your answer: ');


const wrongAnswer = () => {
    console.log(`${answer} is wrong answer;(. Correct answer was 
    ${result}.\nLet's try again ${userName}`);
};

const correctAnswer = () => {
    console.log(`Correct!`);
    score += 1;
};

const congrats = () => {
    console.log(`Congratulations, ${userName}!`);
};

export { start, answer, wrongAnswer, correctAnswer,
congrats };