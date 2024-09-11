// Q: Create a function to check if two objects are equal 
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

function objectsareequal(o1: Object, o2: Object): boolean {
    // Return false if objects have different number of members
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false;
    };

    let index1: number = 0;  // Objects are not indexable, so we'll keep track of indexes manually
    let index2: number = 0;

    for (let m in o1) {  // Iterate over all keys in o1
        for (let n in o2) {  // Iterate over all keys in o2
            if (index1 !== index2) {  // Will not check match unless "indexes" are the same
                index2++;
                continue;
            } else if (m !== n || o1[m] !== o2[n]) {  // Return false if either keys or values don't match
                return false;
            } else {  // If all matches, move to next key in o1
                break;
            };
        };
        index1++;
        index2 = 0;
    };

    return true;
};

console.log(objectsareequal({}, {}));  // true
console.log(objectsareequal({}, {a: 1}));  // false
console.log(objectsareequal({a: 1}, {}));  // false
console.log(objectsareequal({a: 1, b: 5}, {a: 1, b: 5}));  // true
console.log(objectsareequal({a: 1, b: 5}, {a: 1, b: 500}));  // false
console.log(objectsareequal({a: 1, b: 5}, {b: 5, a: 1}));  // false
console.log(objectsareequal({a: 1, b: 5}, {a: 1}));  // false
console.log(objectsareequal({a: 1}, {a: 1, b: 5}));  // false
console.log(objectsareequal({a: 1, b: 5}, {a: 1, c: 5}));  // false
console.log(objectsareequal([2, 3], [2, 3]));  // true
console.log(objectsareequal([2, 3], [2, 4]));  // false
console.log(objectsareequal(['hello world'], ['hello world']));  // true
console.log(objectsareequal([0, 1], [0, '1']));  // false