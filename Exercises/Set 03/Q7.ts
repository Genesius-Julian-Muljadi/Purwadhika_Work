// Q: Write a code to swap the case of each character from string

const iistr: string = "And, although his airbending skills are GREAT, he has a LOT to learn before he's ready to save anyone.";

let iistrt: string = "";
for (let i=0;i<iistr.length;i++) {
    if (iistr[i] === iistr[i].toUpperCase()) {
        iistrt = iistrt + iistr[i].toLowerCase();
    } else {
        iistrt = iistrt + iistr[i].toUpperCase();
    }
};

console.log(iistrt);