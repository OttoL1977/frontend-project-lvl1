import randomNumber from '../random.js';
import flow from '../flow.js';

const description = 'What number is missing in the progression?';

export default function brainProgression() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const newArr = [];
    const arrNum = [];
    let numberOne = randomNumber(1, 20);
    const period = randomNumber(1, 100);
    const numberHidden = randomNumber(2, 8);
    let answerHiddenNumber;
    let str = '';
    for (let k = 0; k < 10; k += 1) {
      arrNum.push(numberOne);
      numberOne += period;
    }
    for (let g = 0; g < arrNum.length; g += 1) {
      if (g === numberHidden) {
        answerHiddenNumber = arrNum[g];
        str += '..';
        str += ' ';
      } else {
        str += arrNum[g];
        str += ' ';
      }
    }
    newArr.push(String(str));
    newArr.push(String(answerHiddenNumber));
    arr.push(newArr);
  }
  flow(arr, description);
}
