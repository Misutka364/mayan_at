let ddInput = document.getElementById('dd');
let mmInput = document.getElementById('mm');
let yyyyInput = document.getElementById('yyyy');
let haabOutput = document.getElementById('haab');
let tzolkinOutput = document.getElementById('tzolkin');

function convertToHaab(day, month) {
  let months = [
    "Pop", "Wo'", "Sip", "Zotz'", "Tzec", "Xul", "Yaxkin", "Mol", "Chen", "Yax",
    "Zac", "Ceh", "Mac", "Kankin", "Muan", "Pax", "Kayab", "Kumku", "Wayeb"
  ];

  if (month < 1 || month > 12 || day < 1 || day > 30) {
      return "Неверная дата";
  }

  let haabDay = (day % 20 === 0) ? 20 : day % 20; 
  let haabMonthIndex = Math.floor((day + (month-1) * 30 -1) / 20); 
  let haabMonth = months[haabMonthIndex];
  return `${haabDay} ${haabMonth}`;
}


function convertToTzolkin(day, month, year) {
    let tzolkinDays = ["Imix", "Ik'", "Ak'bal", "K'an", "Chikchan", "Kimi", "Manik'", "Lamat", "Muluk", "Ok",
                          "Chuwen", "Eb'", "Ben", "Ix", "Men", "Kib'", "Kaban", "Etz'nab'", "Kawak", "Ajaw"];
    let tzolkinCycleLength = 260; 
    let gregorianDate = new Date(year, month - 1, day);  
    let daysSinceEpoch = Math.floor((gregorianDate.getTime() / (1000 * 60 * 60 * 24)) + 2440588); 

    let tzolkinDayIndex = (daysSinceEpoch % 13 -1 + 13) % 13 + 1; 
    let tzolkinDay = tzolkinDays[(daysSinceEpoch % 20 + 20) % 20];


    return `${tzolkinDayIndex} ${tzolkinDay}`;
}

function calculateDate() {
  let day = parseInt(ddInput.value, 10);
  let month = parseInt(mmInput.value, 10);
  let year = parseInt(yyyyInput.value, 10);

  let haabResult = convertToHaab(day, month);
  let tzolkinResult = convertToTzolkin(day, month, year);

  haabOutput.value = haabResult;
  tzolkinOutput.value = tzolkinResult;
}


ddInput.addEventListener('input', calculateDate);
mmInput.addEventListener('input', calculateDate);
yyyyInput.addEventListener('input', calculateDate);