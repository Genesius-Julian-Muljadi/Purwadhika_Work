// Q: Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

function primarray(array: Array<any>) {
    let output: Array<any> = [];
    
    for (let i=0;i<array.length;i++) {
        let t: string = typeof(array[i]);
        if (t === 'string' ||
            t === 'number' ||
            t === 'boolean' ||
            array[i] == null ||  // null should be primitive, but typeof(null) = 'object'
            t === 'undefined'
        ) {
            output.push(array[i]);
        };
    };
    // console.log(output);  // Check output with Quokka
    return output;
};

console.log(primarray([]));
console.log(primarray([1, [], undefined, "string", {}, [], null]));