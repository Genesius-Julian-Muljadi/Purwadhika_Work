//  Q: Write a code to check whether a string is a palindrome or not.

const str: string = "ra4bhdfp2zmz2pfhdb4ar";
// const str: string = "racecar";

let p: string = "palindrome";
let strt: string = str;
for (let i = 0; i <= str.length / 2; i++) {
    if (strt[0] === strt[strt.length - 1]) {
        strt = strt.slice(1,strt.length - 1);
        continue;
    } else {
        p = "not a palindrome";
        break;
    }
};

console.log(p);