const alfabet = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "K",
  "k",
  "L",
  "l",
  "M",
  "m",
  "N",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
];
export default function useIdCreater() {
  const arrCode = [
    rondomLetter(),
    rondomNumber(),
    rondomLetter(),
    rondomNumber(),
    rondomLetter(),
  ];
  const code = arrCode.join("");
  return code;
}

function rondomNumber() {
  return Math.floor(Math.random() * 10);
}

function rondomLetter() {
  return alfabet[Math.floor(Math.random() * alfabet.length)];
}
