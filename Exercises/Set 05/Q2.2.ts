// Q: Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 
// Example : 
//               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8                                                                                                                                                  
//               The function will return [5, 10, 24, 3, 6]

function toArray(size: number, ...n: Array<number>) {
    let len: number = 0;
    let output: Array<number> = [];
    while (len < size) {
        if (n[len] == undefined) {
            break;
        };
        output.push(n[len]);
        len++;
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(toArray(5, 3, 4, 2, 4, 1, 6, 7));
console.log(toArray(4, 3));