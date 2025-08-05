let numberInput = document.getElementById('number');
let mayanInput = document.getElementById('mayan');
let literalInput = document.getElementById('in-two-words');

numberInput.addEventListener('input', function() {
  let numberValue = parseInt(numberInput.value, 10); 

  if (numberValue === 0) { 
    mayanInput.value = '⨀';
    literalInput.value = '0'; 
  } else if (numberValue === 1){
    mayanInput.value = "●";
    literalInput.value = "1";
  } else if (numberValue === 2){
    mayanInput.value = "●●";
    literalInput.value = "2";
  } else if (numberValue === 3){
    mayanInput.value = "●●●";
    literalInput.value = "3";
  } else if (numberValue === 4){
    mayanInput.value = "●●●●";
    literalInput.value = "4";
  } else if (numberValue === 5){
    mayanInput.value = "−";
    literalInput.value = "5";
  } else if (numberValue === 6){
    mayanInput.value = "●−";
    literalInput.value = "6";
  } else if (numberValue === 7){
    mayanInput.value = "●●−";
    literalInput.value = "7";
  } else if (numberValue === 8){
    mayanInput.value = "●●●−";
    literalInput.value = "8";
  } else if (numberValue === 9){
    mayanInput.value = "●●●●−";
    literalInput.value = "9";
  } else if (numberValue === 10){
    mayanInput.value = "−−";
    literalInput.value = "10";
  } else if (numberValue === 11){
    mayanInput.value = "●−−";
    literalInput.value = "11";
  } else if (numberValue === 12){
    mayanInput.value = "●●−−";
    literalInput.value = "12";
  } else if (numberValue === 13){
    mayanInput.value = "●●●−−";
    literalInput.value = "13";
  } else if (numberValue === 14){
    mayanInput.value = "●●●●−−";
    literalInput.value = "14";
  } else if (numberValue === 15){
    mayanInput.value = "−−−";
    literalInput.value = "15";
  } else if (numberValue === 16){
    mayanInput.value = "●−−−";
    literalInput.value = "16";
  } else if (numberValue === 17){
    mayanInput.value = "●●−−−";
    literalInput.value = "17";
  } else if (numberValue === 18){
    mayanInput.value = "●●●−−−";
    literalInput.value = "18";
  } else if (numberValue === 19){
    mayanInput.value = "●●●●−−−";
    literalInput.value = "19";
  } else if (numberValue === 20){
    mayanInput.value = "●.⨀";
    literalInput.value = "1.0";
  } else if (numberValue === 21){
    mayanInput.value = "●.●";
    literalInput.value = "1.1";
  } else if (numberValue === 22){
    mayanInput.value = "●.●●";
    literalInput.value = "1.2";
  } else if (numberValue === 23){
    mayanInput.value = "●.●●●";
    literalInput.value = "1.3";
  } else if (numberValue === 24){
    mayanInput.value = "●.●●●●";
    literalInput.value = "1.4";
  } else if (numberValue === 25){
    mayanInput.value = "●.−";
    literalInput.value = "1.5";
  } else if (numberValue === 26){
    mayanInput.value = "●.●−";
    literalInput.value = "1.6";
  } else if (numberValue === 27){
    mayanInput.value = "●.●●−";
    literalInput.value = "1.7";
  } else if (numberValue === 28){
    mayanInput.value = "●.●●●−";
    literalInput.value = "1.8";
  } else if (numberValue === 29){
    mayanInput.value = "●.●●●●−";
    literalInput.value = "1.9";
  } else if (numberValue === 30){
    mayanInput.value = "●.−−";
    literalInput.value = "1.10";
  }
});