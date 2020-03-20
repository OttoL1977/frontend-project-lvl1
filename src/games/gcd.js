import randomNumber from '../random.js';
import flow from '../flow.js';

const description = 'Find the greatest common divisor of given numbers.';
const divider = (a, b) => {
  let valueDiv;
  for (let k = 1; k <= a; k += 1) {
    if (a % k === 0 && b % k === 0) {
      valueDiv = k;
    }
  } return valueDiv;
};

export default function brainGcd() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const newArr = [];
    const a = randomNumber();
    const b = randomNumber();
    const number = `Question: ${a} ${b}`;
    newArr.push(number);
    newArr.push(String(divider(a, b)));
    arr.push(newArr);
  }
  flow(arr, description);
}
