// Q: Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

// Q isn't comprehensive, so we will assume these outputs when using these inputs:
// Input : { a: 1, b: 2, c: 3 } & { a: 1, c: 3, b: 2 }
// Output: { a: 1, b: 2, c: 3 }

// Input : { a: 1, b: 2, c: 3 } & { a: 1, c: 3 }
// Output: { a: 1, c: 3 }

// Input : { c: 3, a: 1, d: 4 } & { a: 1, b: 2, c: 3, d: 70 }
// Output: { c: 3, a: 1 }

function objectsareequalset07q2(o1: Object, o2: Object): boolean {  // Function from Q1
    let index1: number = 0;
    let index2: number = 0;

    for (let m in o1) {
        for (let n in o2) {
            if (index1 !== index2) {
                index2++;
                continue;
            } else if (m !== n || o1[m] !== o2[n]) {
                return false;
            } else {
                break;
            };
        };
        index1++;
        index2 = 0;
    };

    for (let n in o2) {
        index2++;
    };
    if (index1 !== index2) {
        return false;
    };

    return true;
};

function dupfindset07q2(array: Array<any>) {  // Array dupfind from Set 05 Q2.4, slightly modified
    let output: Array<any> = [];
    let arrayt: Array<any> = [];
    for(let i=0;i<array.length;i++) {
        for(let j=0;j<arrayt.length;j++) {
            if (objectsareequalset07q2(array[i], arrayt[j])) {  // Using above function, since comparison is between arrays
                let b: boolean = true;
                for(let k=0;k<output.length;k++) {
                    if (!objectsareequalset07q2(output[k], array[i])) {
                        continue;
                    } else {
                        b = false;
                        break;
                    };
                };
                if (b) {
                    output.push(array[i]);
                };
                break;
            };
        };
        arrayt.push(array[i]);
    };
    return output;
};

function dupfindobj(o1: Object, o2: Object): Object {
    const a1: Array<[string, any]> = [];
    const a2: Array<[string, any]> = [];

    // Turn input objects into arrays to use dupfindset07q2
    for (let k in o1) {
        a1.push([k, o1[k]]);
    };
    for (let k in o2) {
        a2.push([k, o2[k]]);
    };

    let d: Array<[string, any]> = dupfindset07q2([...a1, ...a2]);

    // Sort d Array to match o1 key order
    const o1k: Array<string> = Object.keys(o1);
    d.sort((a: [string, any], b: [string, any]) => o1k.indexOf(a[0]) - o1k.indexOf(b[0]));

    // Prepare output
    let output: Object = {};
    for (let i=0;i<d.length;i++) {
        Object.defineProperty(output, d[i][0], {  // Object.defineProperty is like the object version of Array.push
            value: d[i][1],
            writable: true,
            enumerable: true,
            configurable: true,
        });
    };
    
    return output;
};

console.log(dupfindobj({ a: 1, b: 2 }, { a: 1, c: 3 }));  // { a: 1 }
console.log(dupfindobj({ a: 1, b: 2, c: 3 }, { a: 1, c: 3, b: 2 }));  // { a: 1, b: 2, c: 3 }
console.log(dupfindobj({ a: 1, b: 2, c: 3 }, { a: 1, c: 3 }));  // { a: 1, c: 3 }
console.log(dupfindobj({ c: 3, a: 1, d: 4 }, { a: 1, b: 2, c: 3, d: 70 }));  // { c: 3, a: 1 }
console.log(dupfindobj(  // {}
    { name: "\"Reckless\" Barry", health: 100, power: 10},
    { name: "Cutthroat Dave", health: 125, power: 13}));

console.log(dupfindobj(  // { health: 215, power: 25 }
    { name: "Daren, the Healer in Armor", health: 215, power: 25},
    { name: "Hadrik, the Dwarf", health: 215, power: 25}));