function romanizer(num) {
  const valuesArray = [
    {
      arabic: 1000,
      roman: "M"
    },
    {
      arabic: 900,
      roman: "CM"
    },
    {
      arabic: 500,
      roman: "D"
    },
    {
      arabic: 400,
      roman: "CD"
    },
    {
      arabic: 100,
      roman: "C"
    },
    {
      arabic: 90,
      roman: "XC"
    },
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
  if (num > 4000) {
    return false
  }
  let remainder = num;
  let romanNumeral = '';
  valuesArray.forEach(function(value) {
    while (remainder >= value.arabic) {
      romanNumeral += value.roman;
      remainder -= value.arabic;
    }
  });
  return romanNumeral;
}

function userInput(e) {
  e.preventDefault();
  resetDisplay();
  const input = document.getElementById("input").value;
  const output = romanizer(input);
  
  const display = document.getElementById("output");
  display.innerText = output;
}

function resetDisplay() {
  const output = document.getElementById("output");
  output.innerText = '';
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", userInput)
})