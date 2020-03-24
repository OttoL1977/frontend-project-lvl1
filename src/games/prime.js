import getRandomNumber from '../random.js';
import flow from '../flow.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numbersOfGames = 3;

const checkNumberPrime = (number) => {
  let answerPrime;
  for (let k = 2; k < number; k += 1) {
    if (number % k === 0) {
      answerPrime = 'no';
      break;
    }
    if (k === number - 1 && number % k !== 0) {
      answerPrime = 'yes';
    }
  } return answerPrime;
};

export default function () {
  const arr = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    const newArr = [];
    const numberRandom = getRandomNumber();
    newArr.push(numberRandom);
    newArr.push(checkNumberPrime(numberRandom));
    arr.push(newArr);
  }
  flow(arr, description);
}
