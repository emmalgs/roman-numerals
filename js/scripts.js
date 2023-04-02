const valuesArray = [
  {
    arabic: 50,
    roman: "L"
  },
  {
    arabic: 40,
    roman: "XL"
  },
  {
    arabic: 10,
    roman: "X"
  },
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
  },
  {
    arabic: 1,
    roman: "I"
  }
]

function romanizer(num) {
  let remainder = num;
  let romanNumeral = '';
  valuesArray.forEach(function(value) {
    while (remainder >= value.arabic) {
      romanNumeral += value.roman;
      remainder -= value.arabic;
    }
  });
  for (let i = remainder; i > 0; i--) {
    romanNumeral += "I"
  }
  return romanNumeral;
}
