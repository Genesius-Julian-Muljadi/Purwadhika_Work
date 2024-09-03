// Q: Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]     

function dupfind(array: Array<any>) {
    let output: Array<any> = [];
    let arrayt: Array<any> = [];
    for(let i=0;i<array.length;i++) {  // Start checking all values of input array
        for(let j=0;j<arrayt.length;j++) {  // Start storing values in temp array
            if (array[i] === arrayt[j]) {  // if found duplicate
                let b: boolean = true;  // Boolean value will change to false if duplicate is already in output
                for(let k=0;k<output.length;k++) {  // Push duplicate value to output, if not already in output
                    if (output[k] !== array[i]) {
                        continue;
                    } else {
                        b = false;
                        break;
                    };
                };
                if (b) {  // Push duplicate value to output, if not already in output
                    output.push(array[i]);
                };
                break;
            };
        };
        arrayt.push(array[i]);
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(dupfind([]));
console.log(dupfind([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(dupfind([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]));
console.log(dupfind([3, 5, 3, 2, 7, 5, 8, 4, 3, 4, 7, 5, 6, 6]));