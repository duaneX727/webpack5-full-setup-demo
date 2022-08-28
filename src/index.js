import "./styles/index.scss";
const hunkBee = {
  a: 3,
  b: 8,
  c: 9
};
console.log(hunkBee);

const rigsBee = {
  ... hunkBee,
  c: 45,
  d: "riggsBeetkle"
}
console.log(rigsBee);
const isBabel = !(class {}.toString().indexOf(rigsBee) === 0);
console.log('isBabel =', isBabel);
