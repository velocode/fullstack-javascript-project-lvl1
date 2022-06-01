#!/usr/bin/env node
import userName from '../src/cli.js';

console.log("Welcome to the Brain Games!");
console.log('Hello ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(Math.floor(Math.random() * 100));