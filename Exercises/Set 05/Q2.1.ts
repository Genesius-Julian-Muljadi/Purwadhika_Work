// Q: Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function numbersum(array: Array<any>) {
    let sum: number = 0;
    for (let i=0;i<array.length;i++) {
        if (typeof(array[i]) === 'number') {
            sum += array[i];
        } else continue;
    };
    // console.log(sum);  // Check output with Quokka
    return sum;
};

console.log(numbersum([]));
console.log(numbersum([1, 2, 3, 4, 5]));
console.log(numbersum(["Hello", "world!", "1", "2", 3, 4, 5, "6", true]));