// Q: Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// We will assume the input is a valid roman numeral

function romanToNum(roman: string): number {
    if (roman === '0') {
        return 0;
    };

    const rarr: Array<string> = roman.split("");
    let t: string | undefined;
    let output: number = 0;
    while (rarr.length > 0) {
        t = rarr.shift();
        try {
            if (t === 'M') {
                output += 1000;
            } else if (t === 'D') {
                output += 500;
            } else if (t === 'C') {
                if (rarr[0] === 'M') {
                    rarr.shift();
                    output += 900;
                } else if (rarr[0] === 'D') {
                    rarr.shift();
                    output += 400;
                } else {
                    output += 100;
                };
            } else if (t === 'L') {
                output += 50;
            } else if (t === 'X') {
                if (rarr[0] === 'C') {
                    rarr.shift();
                    output += 90;
                } else if (rarr[0] === 'L') {
                    rarr.shift();
                    output += 40;
                } else {
                    output += 10;
                };
            } else if (t === 'V') {
                output += 5;
            } else if (t === 'I') {
                if (rarr[0] === 'X') {
                    rarr.shift();
                    output += 9;
                } else if (rarr[0] === 'V') {
                    rarr.shift();
                    output += 4;
                } else {
                    output++;
                };
            } else {
                throw new Error('Please input valid roman numeral characters')
            };
        } catch (error: any) {
            console.log(error.message);
        };
    };

    return output;
};

console.log(romanToNum('0'));  // 0
console.log(romanToNum('I'));  // 1
console.log(romanToNum('III'));  // 3
console.log(romanToNum('IV'));  // 4
console.log(romanToNum('VII'));  // 7
console.log(romanToNum('IX'));  // 9
console.log(romanToNum('X'));  // 10
console.log(romanToNum('XII'));  // 12
console.log(romanToNum('XIV'));  // 14
console.log(romanToNum('XV'));  // 15
console.log(romanToNum('XVII'));  // 17
console.log(romanToNum('XXIX'));  // 29
console.log(romanToNum('XXX'));  // 30
console.log(romanToNum('XL'));  // 40
console.log(romanToNum('L'));  // 50
console.log(romanToNum('LXXIV'));  // 74
console.log(romanToNum('XC'));  // 90
console.log(romanToNum('C'));  // 100
console.log(romanToNum('CXX'));  // 120
console.log(romanToNum('CXLII'));  // 142
console.log(romanToNum('CCCLXXXVII'));  // 387
console.log(romanToNum('CD'));  // 400
console.log(romanToNum('DCXCIV'));  // 694
console.log(romanToNum('CMXC'));  // 990
console.log(romanToNum('M'));  // 1000
console.log(romanToNum('MMCDXXIX'));  // 2424