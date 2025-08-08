let numberInput = document.getElementById('number');
let mayanInput = document.getElementById('mayan');
let literalInput = document.getElementById('in-two-words');

numberInput.addEventListener('input', function() {
  mayanInput.value = '';
  literalInput.value = '';
  
  let numberValue = parseInt(numberInput.value, 10);
  
  let twenties = Math.floor(numberValue / 20);
  let remainder = numberValue % 20;
  
  let mayan = '';
  
  for (let i = 0; i < twenties; i++) {
    mayan += '●';
  }
  
  if (twenties > 0) {
    mayan += '.';
  }
  
  if (remainder === 0) {
    mayan += '⨀';
  } else if (remainder <= 4) {
    for (let i = 0; i < remainder; i++) {
      mayan += '●';
    }
  } else if (remainder % 5 === 0) {
    let lines = remainder / 5;
    for (let i = 0; i < lines; i++) {
      mayan += '−';
    }
  } else {
    let lines = Math.floor(remainder / 5);
    let dots = remainder % 5;
    for (let i = 0; i < lines; i++) {
      mayan += '−';
    }
    for (let i = 0; i < dots; i++) {
      mayan += '●';
    }
  }
  
  mayanInput.value = mayan;
  literalInput.value = numberValue;
});
