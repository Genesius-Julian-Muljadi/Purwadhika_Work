// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example : 
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

function kvswap(a: Array<Object>): Array<Object> {
    const output: Array<Object> = [];

    for (let i=0;i<a.length;i++) {
        const o: Object = {};
        for (let k in a[i]) {
            o[a[i][k]] = k;
        };
        output.push(o);
    };

    return output;
};

console.log(kvswap([]));  // []
console.log(kvswap([{a: 1}, {b: 2, c: 'C'}, {}]));  // [ { 1: 'a' }, { 2: 'b', C: 'c' }, {} ]
console.log(kvswap([{b: 2, c: 'C', a: 1}]));  // [ { 1: 'a', 2: 'b', C: 'c' } ]
console.log(kvswap([{true: 't', f: false}]));  // [ { t: 'true', false: 'f' } ]
console.log(kvswap([{u: undefined, n: null}]));  // [ { underfined: 'u', null: 'n' } ]
console.log(kvswap([{arr: ['h', 3, 'l', 'l', 0]}]));  // [ { 'h,3,l,l,0': 'arr' } ]
console.log(kvswap([{obj: {a: 1, b: 2, c: 'C'}}]));  // [ { '[object Object]': 'obj' } ]
