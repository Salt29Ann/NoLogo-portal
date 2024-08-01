let myArray = [ 3, 7, -4, 25, 240, 15, 2, 42, 30, -17, 3, 48 ]

function arrayReverse(array) {
    return array.slice().reverse();
}

function arraySumEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 && array[i] % 2 === 0) {
            sum += array[i];
        }
    }   return sum;
}

function arrayPalindrome(array) {
    return array.every((value, index) => value === array[array.length - 1 - index]);
}

function processArrayTasks(inputArray) {
    const reversedArray = arrayReverse(inputArray);
    const sumEven = arraySumEven(inputArray);
    const isPalindrome = arrayPalindrome(inputArray);

    return {
        reversedArray,
        sumEven,
        isPalindrome,
    };
}

const result = processArrayTasks(myArray)

console.log(result.reversedArray);
console.log(result.sumEven);
console.log(result.isPalindrome);