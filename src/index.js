import userName from "./utils/userName.js";
import answer from "./utils/answer.js";



const start = () => {
  console.log('Welcome to the Brain Games!');
  
  console.log(`Hello, ${userName}!`);
   
};
const correctAnswer = () => {
  console.log('Correct!');
};



export {
  start, correctAnswer, userName, answer,
};
