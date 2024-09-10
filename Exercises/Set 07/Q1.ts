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

    for (let n in o2) {
        index2++;
    };
    if (index1 !== index2) {  // Above process can still think objects match when objects have different number of keys.
        return false;  // This ensures objects with different "lengths" are considered different
    };

    return true;
};

console.log(objectsareequal({}, {}));
console.log(objectsareequal({}, {a: 1}));
console.log(objectsareequal({a: 1}, {}));
console.log(objectsareequal({a: 1, b: 5}, {a: 1, b: 5}));
console.log(objectsareequal({a: 1, b: 5}, {b: 5, a: 1}));
console.log(objectsareequal({a: 1, b: 5}, {a: 1}));
console.log(objectsareequal({a: 1}, {a: 1, b: 5}));
console.log(objectsareequal({a: 1, b: 5}, {a: 1, c: 5}));
console.log(objectsareequal([2, 3], [2, 3]));