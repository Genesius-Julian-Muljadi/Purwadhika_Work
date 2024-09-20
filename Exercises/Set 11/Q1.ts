// Q: Create a function to convert Excel sheet column title to its corresponding column number.
// Example : 
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// …
// Example : 
// Input : AB
// Output : 28

// We will assume input is a valid Excel column label

function XLColNum(col: string): number {
    let output: number = 0;
    
    for (let i = 0; i < col.length; i++) {
        output += (col.charCodeAt(col.length - 1 - i) - 64) * Math.pow(26, i);
    };

    return output;
};

console.log(XLColNum('A'));  // 1
console.log(XLColNum('G'));  // 7
console.log(XLColNum('Z'));  // 26
console.log(XLColNum('AA'));  // 27
console.log(XLColNum('AZ'));  // 52
console.log(XLColNum('ZZ'));  // 702
console.log(XLColNum('AAB'));  // 704