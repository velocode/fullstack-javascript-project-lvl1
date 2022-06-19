import readlineSync from 'readline-sync';
import askName from './utils/userName.js';

const start = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${askName()}!`);
};

export default start;
