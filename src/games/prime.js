import getRandomNumber from '../random.js';
import flow from '../flow.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numbersOfGames = 3;

const checkNumberPrime = (number) => {
  for (let k = 2; k < number / 2; k += 1) {
    if (number % k === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => (checkNumberPrime(num) ? 'yes' : 'no');

export default function () {
  const arr = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    const newArr = [];
    const numberRandom = getRandomNumber();
    newArr.push(numberRandom);
    newArr.push(getAnswer(numberRandom));
    arr.push(newArr);
  }
  flow(arr, description);
}
