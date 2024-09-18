// Q: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// We will assume the function will ignore all whitespace.
// We will assume the function is case sensitive. Ex: 'A' != 'a'.

function isAnagram(s: string, t: string): boolean {
    // Turn strings into arrays, remove all whitespace, then sort in Unicode order
    const ss: Array<string> = s.split("")
        .filter((val: string) => !/\s/.test(val))
        .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
    const tt: Array<string> = t.split("")
        .filter((val: string) => !/\s/.test(val))
        .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));

    // If strings have different number of characters non-whitespace characters, return false
    if (ss.length !== tt.length) {
        return false;
    };

    // Because strings are now sorted, just check for equivalence for each index
    for (let i=0;i<ss.length;i++) {
        if (ss[i] === tt[i]) {
            continue;
        } else {
            return false;
        };
    };

    return true;
};

console.log(isAnagram("anagram", "nagaram"));  // true
console.log(isAnagram("rat", "car"));  // false
console.log(isAnagram("car", "Car"));  // false
console.log(isAnagram("hello world", "hllo world"));  // false
console.log(isAnagram("hello world!", "worldhello!")); // true
console.log(isAnagram(`a
    decimal
    point`, 'im a dot in place'));  // true
console.log(isAnagram('The eyes', 'Theysee'));  // true