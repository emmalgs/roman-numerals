function romanizer(num) {
  let remainder = num;
  let romanNumeral = '';
  if (num >= 5) {
    romanNumeral += "V";
    remainder -= 5
  } else if (num === 4) {
    return "IV"
  }
  for (let i = remainder; i > 0; i--) {
    romanNumeral += "I"
  }
  return romanNumeral;
}
