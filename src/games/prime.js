import readlineSync from 'readline-sync';
import randomNumber from '../random.js';

export default function () {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    let answerNumberHidden = '';
    const numberHidden = randomNumber(1, 100);
    for (let k = 2; k < numberHidden; k += 1) {
      if (numberHidden % k === 0) {
        answerNumberHidden = 'no';
        break;
      }
      if (k === numberHidden - 1 && numberHidden % k !== 0) {
        answerNumberHidden = 'yes';
      }
    }
    console.log(`Question: ${numberHidden}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(answerNumberHidden)) {
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
