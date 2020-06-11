export default function selectRandomKey() {
  const keys = process.env.REACT_APP_YouTube_Keys.split(',');
  console.log(keys);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}
