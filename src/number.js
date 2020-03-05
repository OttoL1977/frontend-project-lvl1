import readlineSync from 'readline-sync';
// import message from './index.js';

export default function correctNumber() {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const value = () => {
      const rand = 0.5 + Math.random() * 100;
      return Math.round(rand);
    };
    const number = value();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
    } else if (answer === 'no' && number % 2 === 1) {
      console.log('Correct!');
    } else if (answer === 'yes' && number % 2 === 1) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${actual}`);
      break;
    } else if (answer === 'no' && number % 2 === 0) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${actual}`);
      break;
    } else {
      console.log('Mistake!');
      console.log(`Let's try again, ${actual}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${actual}!`);
    }
  }
}
