import getRandomNumber from '../random.js';
import flow from '../flow.js';

const description = 'Find the greatest common divisor of given numbers.';
const numbersOfGames = 3;
const findDivider = (a, b) => {
  let valueDiv;
  for (let k = 1; k <= a; k += 1) {
    if (a % k === 0 && b % k === 0) {
      valueDiv = k;
    }
  } return valueDiv;
};

export default function brainGcd() {
  const arr = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    const newArr = [];
    const a = getRandomNumber();
    const b = getRandomNumber();
    const question = `Question: ${a} ${b}`;
    newArr.push(question);
    newArr.push(String(findDivider(a, b)));
    arr.push(newArr);
  }
  flow(arr, description);
}
