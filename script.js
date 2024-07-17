// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(number) {
    return number % 2 === 0; // this will check if the remainder of the number is 2 then if it is 2 it will return true if not it will return false
}
console.log(isEven(4));
console.log(isEven(7));

// ---------------------------------------------------------//

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for(let index = 0; index < 10; index++){
    console.log(`${index} is even: ${isEven(index)}`);
}

// ---------------------------------------------------------//

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(2, 5);

//Another approach

function multiplication(num1, num2){
    return num1 * num2;
}
console.log(multiplication(2, 5));

// ---------------------------------------------------------//

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
//TODO! remove the commented line of codes to run
let num1 = 0;
let num2 = 0;

while (true) {
    // user prompt
    num1 = parseInt(prompt("Enter the first number (enter a negative number to exit):"));
    num2 = parseInt(prompt("Enter the second number (enter a negative number to exit):"));
    
    // this will check if the user input is a negative number then it will terminate the process
    if (num1 < 0 || num2 < 0) {
        break; // the break will terminate the process if the user enters a negative number
    }

    // this will calculate the user input using multiplication
    let product = num1 * num2;
    
    // logs the result
    console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

// ---------------------------------------------------------//

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(string) {

    let reversed = ""; // initialized an empty string where we can put the reversed string

    // this will iterate the input string from end to start of the string
    for(let i = string.length - 1; i >= 0; i--){

        // this will append each character to reversed string
        reversed += string[i];
    }

    return reversed;
}

// ---------------------------------------------------------//

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString('hello'));


// ---------------------------------------------------------//

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str) {
    // define the vowels (lower case and upper case)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // initialized a variable to count how many vowels a string consist of
    let vowelCount = 0;

    // this will loop in every characters of a string
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

// ---------------------------------------------------------//

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels("JavaScript"));

// ---------------------------------------------------------//

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr) {
    // initialized a variable max with the first element of array (0)
    let max = arr[0];
    // this loop starts from 1 since max is already iterates to the rest of the array
    for(let i = 1; i < arr.length; i++) {
        // this will check if the current element in the array which is (1) is greater than the current maximum (variable "max")
        if(arr[i] > max) {
            // this will ensure if the current element is at max value then holds the current maximum element
            max = arr[i];
        }
    }
    return max;
}

// ---------------------------------------------------------//

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));

// ---------------------------------------------------------//

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num) {
    // initialized variable factorial to 1 because it is the identity value for multiplicaiton
    let factorial = 1;
    // this iterates the i from 1 to parameter num
    for(let i = 1; i <= num; i++) {
        factorial *= i; // this will calculate the factorial of the parameter num by multiplying all integers from 1 to parameter num
    }
    return factorial;
}
    
// ---------------------------------------------------------//

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

console.log(calculateFactorial(5));

// ---------------------------------------------------------//

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(str) {
    // this will loop to the string upto its midpoint
    for (let i = 0; i < str.length / 2; i++) {
        // this will compare the characters from both ends of the string
        if (str[i] !== str[str.length - 1 - i]) {
            // return false if the characters in the string did not match
            return false;
        }
    }
    return true;
}

// ---------------------------------------------------------//

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

console.log(isPalindrome("level"));

// ---------------------------------------------------------//

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arr) {
    // initialized variable sum to 0 because it is the identity value for addition
    let sum = 0;
    // this iterates the i from 0 to the length of the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // this will add all the numbers in the array
    }
    return sum;
}

// ---------------------------------------------------------//

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));

// ---------------------------------------------------------//

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(str) {
    // this will return the first letter of the string in uppercase
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

// ---------------------------------------------------------//

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter("javascript"));

// ---------------------------------------------------------//

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
    // this will create a new array to store the even numbers
    let evenNumbers = [];
    // this will iterate the i from 0 to the length of the array
    for (let i = 0; i < arr.length; i++) {
        // this will check if the number is even
        if (arr[i] % 2 === 0) {
            // this will add the even number to the new array
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// ---------------------------------------------------------//

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

