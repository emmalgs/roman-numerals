* TDD

Describe: romanizer();

Test: "It should return 1 when I is entered"
Code: romanizer("I");
Expected Output: 1;

Test: "It should return 5 when V is entered"
Code: romanizer("V");
Expected Output: 5;

Test: "It should return the corresponding value to the symbol"
Code: romanizer("X")
Expected Output: 10;

Test: "It should recognize the symbol regardless of capitalization"
Code: romanizer("c");
Expected Output: 100;