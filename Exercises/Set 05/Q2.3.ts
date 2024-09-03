// Q: Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]      

function arrayconcat(array1: Array<any>, array2: Array<any>) {
    let output: Array<any> = [];
    for(let i=0;i<array1.length;i++) {
        output.push(array1[i]);
    };
    for(let i=0;i<array2.length;i++) {
        output.push(array2[i]);
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(arrayconcat([],[]));
console.log(arrayconcat([2,2,2,5,6,7],["Hello", "world!"]));