import readlineSync from 'readline-sync';


export default function (arr, description) {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log(description);
  for (let i = 0; i <= 2; i += 1) {
    const [number, answerCorrect] = arr[i];
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === answerCorrect) {
      console.log('Correct!');
    } else if (answerUser !== answerCorrect) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}"`);
      console.log(`Let's try again, ${actual}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${actual}!`);
    }
  }
}
