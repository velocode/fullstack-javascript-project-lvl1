import askName from "./utils/userName.js";
import answer from "./utils/answer.js";

const start = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello ${userName}!`);
  return userName;
};

const correctAnswer = () => {
  console.log('Correct!');
};

const yourAnswer = () => {
  const answerOfUser = answer();
  return answerOfUser;
};

export {
  start, correctAnswer, yourAnswer,
};
