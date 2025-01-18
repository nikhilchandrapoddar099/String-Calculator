# String Calculator

I used TypeScript to implemente the String Calculator.

# Features
	1.	Add numbers from a string input: Handles both comma , and newline \n delimiters.
	2.	Empty string input: Returns 0 if the input string is empty.
	3.	Single number input: Returns the number itself.
	4.	Two or more numbers: Returns the sum of numbers.
	5.	Handle an unknown amount of numbers: Dynamically processes any number of inputs.
	6.	Newline as a delimiter: Supports both commas and newlines as valid delimiters.
	7.	Negative numbers validation: Throws an error with a list of all negative numbers.
	8.	Ignore numbers greater than 1000: Numbers larger than 1000 are excluded from the sum.
	9.	Custom delimiters:
	    •	Delimiters can be defined in the format //[delimiter]\n.
	    •	Supports multiple delimiters like //[delim1][delim2]\n.
	    •	Handles delimiters with lengths greater than one character.

# Installation

Install Dependencies -> npm install

# Test the project

Run tests to ensure the setup is working correctly -> npx jest
