import { lottoData } from "../fetch";

export const home = (req, res) => res.render("home", { lottoData });
export const getLotto = (req, res) => res.render("lotto");
export const postLotto = (req, res) => {
  const numArray = [];
  const mixedNum = [];
  for (var nums = 1; nums <= 45; nums++) {
    numArray.push(nums);
  }
  while (numArray.length > 0) {
    const num = Math.floor(Math.random() * numArray.length);
    const remainNums = numArray.splice(num, 1)[0];
    mixedNum.push(remainNums);
  }
  const lottoNum = mixedNum.slice(0, 7).sort((prev, curr) => prev - curr);
  res.render("lotto", { lottoNum });
};

export const pension = (req, res) => res.render("pension");
