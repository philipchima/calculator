// Make a program that prints the value of the factorial N!, that is N*(N-1)'(N-2)*...*1
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log(`Input: ${number}`);
    console.log('Answer: Unspecified');
}

// if number is 0
else if (number === 0) {
    console.log(`Input: ${number}`);
    console.log(`Answer: 1`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`Input: ${number}`);
    console.log(`Answer: 1`);
}