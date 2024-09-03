// Q: Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// I assume the question is asking to add the values of the array according to position

function arraysum(array1: Array<number>, array2: Array<number>) {
    if (array1.length !== array2.length) {
        return "Please input arrays with similar lengths";
    };

    let len: number = array1.length;
    let arrayn: Array<number> = [];
    for (let i=0;i<len;i++) {
        arrayn.push(array1[i] + array2[i]);
    };
    // console.log(arrayn);  // Check output with Quokka
    return arrayn;
};

console.log(arraysum([],[]));
console.log(arraysum([3],[2,5]));
console.log(arraysum([5,46,231,3],[65,33,29,0]));