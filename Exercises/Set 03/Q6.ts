// Write a code to capitalize the first letter of each word in a string

const istr: string = "100 years passed, and my brother and I discovered the new avatar: an airbender named aang."

let istrt: string = "";
let istrb: boolean = true;
for (let i=0;i<istr.length;i++) {
    if (istrb) {
        istrt = istrt + istr[i].toUpperCase();
        istrb = false;
    } else {
        istrt = istrt + istr[i];
    }
    if (istr[i] === " ") {
    // if (/\s/.test(istr[i])) {       /* This condition is better, as it tests for all whitespace, not just " ".
        istrb = true;
    } else continue;
};

console.log(istrt);