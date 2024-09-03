// Q: Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function secondsmallest(inputarray: Array<number>) {
    if (inputarray.length <= 1) {
        return undefined;
    };

    let low: number = inputarray[0];
    let high: number = inputarray[0]; // If array is in ascending order, this will store 2nd lower value instead
    let low2;  // Variable declared typeless to return undefined in case all numbers in array are the same
    for (let i=0;i<inputarray.length;i++) {
        if (inputarray[i] < low) {
            low2 = low;
            low = inputarray[i];
        } else if (inputarray[i] > low) {
            if (low === high || inputarray[i] < high) {
                high = inputarray[i];
            };
        } else continue;
    }
    if (low2 == undefined) {
        if (low === high) {  // If all values are the same, returns undefined
            // console.log(undefined);  // Check output with Quokka
            return undefined;
        } else {  // If array is in ascending order, returns 2nd lowest value from high
            // console.log(high);  // Check output with Quokka
            return high;
        };
    } else {  // If array is not all same value nor ascending, returns 2nd lowest value from low2
        // console.log(low2);  // Check output with Quokka
        return low2;
    };
};

console.log(secondsmallest([]));
console.log(secondsmallest([5]));
console.log(secondsmallest([2,2,2,2,2]));
console.log(secondsmallest([24,42]));
console.log(secondsmallest([3,5,9,4,7,5,4,3]));
console.log(secondsmallest([97,79]));