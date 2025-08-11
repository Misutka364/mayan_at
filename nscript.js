function zeroToTwenty(num) {
  if(num === 0) return [0];
  let digits = [];
  while(num > 0) {
    digits.unshift(num % 20);
    num = Math.floor(num / 20);
  }
  return digits;
}

function digitToMayan(digit) {
  if(digit === 0) return "⨀"; 

  const fiveCount = Math.floor(digit / 5);
  const oneCount = digit % 5;

  
  const minus = "−"; 
  const dot = "●";

  return minus.repeat(fiveCount) + dot.repeat(oneCount);
}

function changeNum() {
  let value = parseInt(document.getElementById("number").value, 10);
  if (isNaN(value) || value < 0) {
    value = 0;
  }

  const digits = zeroToTwenty(value);

  const mayan = digits.map(digitToMayan).join(".");

  document.getElementById("mayan").value = mayan;

  const explain = digits
    .map(function(n, i) {
      let expr;
      if (n === 0) expr = "0";
      else if (n < 5) expr = n.toString();
      else expr = "(" + Math.floor(n / 5) + " x 5 + " + (n % 5) + ")";
      const power = digits.length - i - 1;
      return expr + " x 20^" + power;
    }).join(" + \n") + " = " + value;

  document.getElementById("in-two-words").value = explain;
}