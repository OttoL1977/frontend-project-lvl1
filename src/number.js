import randomNumber from './random.js';
import flow from './flow.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function correctNumber(number) {
  if (number % 2 === 0) {
    const answer = 'yes';
    return answer;
  } const answer = 'no';
  return answer;
}

export default function correctNum() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const newArr = [];
    const number = randomNumber();
    newArr.push(number);
    newArr.push(correctNumber(number));
    arr.push(newArr);
  }
  flow(arr, description);
}
