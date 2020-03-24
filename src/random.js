export default function getRandomNumber(min = 0, max = 100) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}
