import fetch from "node-fetch";

const lottoRound = 974;

const lottourl = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${lottoRound}`;

export const lottoData = fetch(lottourl)
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    console.log(
      post.drwtNo1,
      post.drwtNo2,
      post.drwtNo3,
      post.drwtNo4,
      post.drwtNo5,
      post.drwtNo6,
      post.bnusNo
    );
    console.log(post.drwNo);
    console.log(post.drwNoDate);
  })
  .catch((error) => console.log("fetch 에러"));

// https://webisfree.com/2019-05-15/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-fetch-api-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
