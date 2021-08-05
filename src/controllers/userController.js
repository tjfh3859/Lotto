export const home = (req, res) => {
  res.render("home");
};

export const getLotto = (req, res) => res.render("lotto");
export const postLotto = (req, res) => {
  const numArray = [];
  const mixedNum = [];
  let numArray2 = [];
  let mixedNum2 = [];
  let lottoNum2 = [];

  for (var nums = 1; nums <= 45; nums++) {
    numArray.push(nums);
  }
  while (numArray.length > 0) {
    const num = Math.floor(Math.random() * numArray.length);
    const remainNums = numArray.splice(num, 1)[0];
    mixedNum.push(remainNums);
  }
  const lottoNum = mixedNum.slice(0, 6).sort((prev, curr) => prev - curr);

  const rollNum = () => {
    numArray2 = [];
    mixedNum2 = [];
    for (var nums = 1; nums <= 45; nums++) {
      numArray2.push(nums);
    }
    while (numArray2.length > 0) {
      const num = Math.floor(Math.random() * numArray2.length);
      const remainNums = numArray2.splice(num, 1)[0];
      mixedNum2.push(remainNums);
    }
    lottoNum2 = mixedNum2.slice(0, 6).sort((prev, curr) => prev - curr);
    mixedNum2.push(lottoNum2);
  };

  rollNum();

  const consecutive = 3;
  const str = mixedNum2
    .slice(0, 6)
    .sort((prev, curr) => prev - curr)
    .toString();

  const consecutiveDigits = (str, consecutive) => {
    let curr,
      prev,
      count = 0;
    for (var i = 0; i < str.length; ++i) {
      curr = parseInt(str.split(",")[i]);
      if (isNumeric(curr)) {
        if (count === 0) {
          ++count;
        } else if (prev + 1 === curr) {
          ++count;
          if (count === consecutive) {
            return true;
          }
        }
        prev = curr;
      }
    }
    return false;
  };

  const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  console.log(consecutiveDigits(str, consecutive), str);

  if (consecutiveDigits(str, consecutive) === true) {
    rollNum();
    while (consecutiveDigits(str, consecutive) === true) {
      console.log(consecutiveDigits(str, consecutive), str);
      if (consecutiveDigits(str, consecutive) === true) {
        break;
      }
      res.render("lotto", { lottoNum, lottoNum2 });
    }
  } else {
    res.render("lotto", { lottoNum, lottoNum2 });
  }
};

export const getPension = (req, res) => res.render("pension");
export const postPension = (req, res) => {
  const pensionArray = [];
  let pensionMixedNum = [];

  for (var nums = 1; nums <= 9; nums++) {
    pensionArray.push(nums);
  }
  while (pensionArray.length > 0) {
    const num = Math.floor(Math.random() * pensionArray.length);
    const remainNums = pensionArray.splice(num, 1)[0];
    pensionMixedNum.push(remainNums);
  }
  const pensionNum = pensionMixedNum.slice(0, 6);
  console.log(pensionNum);

  res.render("pension", { pensionNum });
};
