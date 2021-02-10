function convertToUSD() {
  const kwd = document.getElementById("kwd_input").value;

  const usd = kwd * 3.3;

  document.getElementById("usd_input").value = usd;
}

function convertToKWD() {
  const usd = document.getElementById("usd_input").value;

  const kwd = usd / 3.3;

  document.getElementById("kwd_input").value = kwd;
}
