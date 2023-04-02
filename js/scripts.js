function romanizer(num) {
  let romanNumeral = '';
  for (let i = num; i > 0; i--) {
    romanNumeral += "I"
  }
  return romanNumeral;
}
