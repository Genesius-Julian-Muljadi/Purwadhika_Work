// Q: Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function evenize (array: Array<number>) {
    let arrayn: Array<number> = [];
    for (let i=0; i<array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayn.push(array[i]);
        } else continue;
    };
    // console.log(arrayn);        // Check output with Quokka
    return arrayn;
};

evenize([1,2,3,4,15,17,18,19,20]);
evenize([3,5,7,9,11,33,71,99]);