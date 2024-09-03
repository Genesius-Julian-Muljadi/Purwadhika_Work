// Q: Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// Q is unclear what output should be in case duplicates exist in one array, but not in the other
// We will assume output of arr1 = [1, 1, 3, 4], arr2 = [5, 6, 6, 7] -> [1, 3, 4, 5, 6, 7]
// We will assume output of arr1 = [1, 1, 3, 4], arr2 = [1, 4, 6, 6] -> [3, 6]
// We will also assume the output array should be ordered arr1 to arr2, minus the matching values

function _arrayconcat(array1: Array<any>, array2: Array<any>) {  // Function from Q2.3
    let output: Array<any> = [];
    for(let i=0;i<array1.length;i++) {
        output.push(array1[i]);
    };
    for(let i=0;i<array2.length;i++) {
        output.push(array2[i]);
    };
    return output;
};

function _dupfind(array: Array<any>) {  // Function from Q2.4
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

function nodupsarray(array: Array<any>) {  // New function to return original array without duplicates, preserving order
    let output: Array<any> = [];
    for (let i=0;i<array.length;i++) {
        let b: boolean = true;
        for (let j=0;j<output.length;j++) {
            if (array[i] !== output[j]) {
                continue;
            } else {
                b = false;
                break;
            };
        };

        if (b) {
            output.push(array[i]);
        };
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

function diffarray(array1: Array<any>, array2: Array<any>) {
    let darray1: Array<any> = nodupsarray(array1);  // Use function from above
    let darray2: Array<any> = nodupsarray(array2);  // Use function from above
    let arrayc: Array<any> = _arrayconcat(darray1, darray2);  // Use function from Q2.3
    let duparray: Array<any> = _dupfind(_arrayconcat(darray1, darray2));  // Use functions from Q2.3 & Q2.4
    let output: Array<any> = [];
    
    for (let i=0;i<arrayc.length;i++) {  // Start pushing values from combined array to output
        let b: boolean = true;  // Will be false if duplicate is found
        for (let j=0;j<duparray.length;j++) {  // Exclude values found in dupfind array
            if (arrayc[i] === duparray[j]) {  // If array value is in duparray
                b = false;
                break;
            } else continue;
        };

        if (b) {
            output.push(arrayc[i]);
        };
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(nodupsarray([9, 3, 4, 2, 5, 6, 7, 8, 2, 4, 5, 7, 9]));

console.log(diffarray([],[]));
console.log(diffarray([1, 1, 3, 4], [5, 6, 6, 7]));
console.log(diffarray([1, 1, 3, 4], [1, 4, 6, 6]));
console.log(diffarray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
