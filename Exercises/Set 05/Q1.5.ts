// Q: Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

function push2(array: Array<any>, e: any) {
    for (let i=0;i<array.length;i++) {
        if (array[i] === e) {
            return array;
        } else continue;
    };
    array.push(e)
    // console.log(array);  // Check output with Quokka
    return array;
};

console.log(push2([5],6));
console.log(push2(["Hello", "world!"], "I'm here!"));
console.log(push2([3,5,7,8,1,2,89,5], 7));
console.log(push2([3,5,7,8,1,2,89,5], 9));
console.log(push2([],new Date));