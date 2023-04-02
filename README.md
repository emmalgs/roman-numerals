* TDD

Describe: romanizer();

Test: "It should return I when 1 is entered"
Code: romanizer(1);
Expected Output: "I";

Test: "It should return V when 5 is entered"
Code: romanizer(5);
Expected Output: "V";

Test: "It should return the corresponding value to the symbol"
Code: romanizer(10)
Expected Output: "X";

Test: "It should return two symbols for a two digit number ending in zero"
Code: romanizer(60);
Expected Output: "LX";

