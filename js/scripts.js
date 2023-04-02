function romanizer(num) {
  const numeral = num.toUpperCase()
  const numeralArray = numeral.split("")
  const numberArray = numeralArray.map(function(symbol) {
    if (symbol === "I") {
      return symbol = 1;
    } else if (symbol === "V") {
      return symbol = 5;
    } else if (symbol === "X") {
      return symbol = 10;
    } else if (symbol === "L") {
      return symbol = 50;
    } else if (symbol === "C") {
      return symbol = 100;
    } else if (symbol === "D") {
      return symbol = 500;
    } else if (symbol === "M") {
      return symbol = 1000;
    }
  });
  let sum = 0;
  numberArray.forEach(function(number) {
    sum += number
  })
  return sum
}
