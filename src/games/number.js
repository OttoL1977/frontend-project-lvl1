import getRandomNumber from '../random.js';
import flow from '../flow.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersOfGames = 3;

function getCorrectNumber(number) {
  if (number % 2 === 0) {
    const answer = 'yes';
    return answer;
  } const answer = 'no';
  return answer;
}

export default function getCorrectNum() {
  const arr = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    const newArr = [];
    const randomNumber = getRandomNumber();
    newArr.push(randomNumber);
    newArr.push(getCorrectNumber(randomNumber));
    arr.push(newArr);
  }
  flow(arr, description);
}
