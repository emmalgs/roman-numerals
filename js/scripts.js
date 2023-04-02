function romanizer(num) {
  let romanNumeral = '';
  if (num === 4) {
    return "IV"
  }
  for (let i = num; i > 0; i--) {
    romanNumeral += "I"
  }
  return romanNumeral;
}
