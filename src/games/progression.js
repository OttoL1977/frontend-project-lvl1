import readlineSync from 'readline-sync';
import randomNumber from '../random.js';

export default function () {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    const newArr = [];
    const numberOne = randomNumber(1, 20);
    const period = randomNumber(1, 100);
    const lengthProgression = 10;
    const numberHidden = randomNumber(2, 8);
    let number = numberOne;
    let answerHiddenNumber;
    let str = '';
    for (let k = 0; k < lengthProgression; k += 1) {
      newArr.push(number);
      number += period;
    }
    for (let g = 0; g < newArr.length; g += 1) {
      if (g === numberHidden) {
        answerHiddenNumber = newArr[g];
        str += '..';
        str += ' ';
      } else {
        str += newArr[g];
        str += ' ';
      }
    }
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    if (+answer === +answerHiddenNumber) {
      console.log('Correct!');
    } else {
      console.log('Error!');
      console.log(`Let's try again, ${actual}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${actual}!`);
    }
  }
}
