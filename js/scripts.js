function romanizer(num) {
  const numeral = num.toUpperCase()
  if (numeral === "I") {
    return 1;
  } else if (numeral === "V") {
    return 5;
  } else if (numeral === "X") {
    return 10;
  } else if (numeral === "L") {
    return 50;
  } else if (numeral === "C") {
    return 100;
  } else if (numeral === "D") {
    return 500;
  } else if (numeral === "M") {
    return 1000;
  }
}