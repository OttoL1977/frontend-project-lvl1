import readlineSync from 'readline-sync';

export default function brainGcd() {
  function randomNumber(min = 1, max = 100) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  }
  const divider = (a, b) => {
    let valueDiv;
    for (let k = 1; k <= a; k += 1) {
      if (a % k === 0 && b % k === 0) {
        valueDiv = k;
      }
    } return valueDiv;
  };
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    const value = divider(a, b);
    if (+value === +answer) {
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
