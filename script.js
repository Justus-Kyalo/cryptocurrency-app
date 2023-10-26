const BTC = document.getElementById("btc");
const ETC = document.getElementById("eth");
const XDG = document.getElementById("doge");

const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

async function getCoins() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  BTC.innerText = data.bitcoin.usd;
  ETC.innerText = data.ethereum.usd;
  XDG.innerText = data.dogecoin.usd;
}

getCoins();
