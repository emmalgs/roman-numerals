const valuesArray = [
  {
    arabic: 9,
    roman: "IX"
  },
  {
    arabic: 5,
    roman: "V"
  },
  {
    arabic: 4,
    roman: "IV"
  }
]

function romanizer(num) {
  let remainder = num;
  let romanNumeral = '';
  valuesArray.forEach(function(value) {
    if (remainder >= value.arabic) {
      romanNumeral += value.roman;
      remainder -= value.arabic;
    }
  });
  for (let i = remainder; i > 0; i--) {
    romanNumeral += "I"
  }
  return romanNumeral;
}
