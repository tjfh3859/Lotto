const lottoNumber = [];
const lottoNumber2 = [];
const lottoNumberBonus = [];
const lottoNumberBonus2 = [];

while (lottoNumber.length < 6) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (lottoNumber.indexOf(random) === -1) {
    lottoNumber.push(random);
  }
  if (lottoNumber.indexOf(random) === (random, random + 1, random + 2).number) {
    lottoNumber.push(random);
  }
}

while (lottoNumber2.length < 6) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (lottoNumber2.indexOf(random) === -1) {
    lottoNumber2.push(random);
  }
}

const sortedNum = lottoNumber.sort(function (a, b) {
  return a - b;
});

const sortedNum2 = lottoNumber2.sort(function (a, b) {
  return a - b;
});

while (lottoNumberBonus.length < 1) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (lottoNumberBonus.indexOf(random) === -1) {
    lottoNumberBonus.push(random);
  }
  if (lottoNumberBonus === lottoNumber) {
    lottoNumberBonus.push(random);
  }
}

while (lottoNumberBonus2.length < 1) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (lottoNumberBonus2.indexOf(random) === -1) {
    lottoNumberBonus2.push(random);
  }
  if (lottoNumberBonus2 === lottoNumber2) {
    lottoNumberBonus.push(random);
  }
}

function init() {
  document.getElementsByClassName("num_lotto")[0].innerHTML = sortedNum;
  document.getElementsByClassName("num_lotto")[1].innerHTML = sortedNum2;
  document.getElementsByClassName("num_lotto_bonus")[0].innerHTML =
    lottoNumberBonus;
  document.getElementsByClassName("num_lotto_bonus")[1].innerHTML =
    lottoNumberBonus2;
}

init();
