// Q: Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40

function __dupfind(array: Array<any>) {  // Function from Q2.4
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
    return output;
};

function dupsum(array: Array<number>) {
    let output: number = 0;
    let duparray: Array<number> = __dupfind(array);

    for (let i=0;i<array.length;i++) {
        let b: boolean = false;  // Will change to true if value is found in duparray
        for (let j=0;j<duparray.length;j++) {  // if value is found in duparray
            if (array[i] === duparray[j]) {
                b = true;
                break;
            } else continue;
        };

        if (b) {
            output += array[i];  // Add to output only if array value found in duparray
        };
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(dupsum([]));
console.log(dupsum([10, 20, 40, 10, 50, 30, 10, 60, 10]));
console.log(dupsum([1, 2, 3, 4, 5]));
console.log(dupsum([1, 44, 2, 3, 11, 2, 3, 1, 7, 8, 9, 4, 1, 2]));