// Q: Write a code to find the sum of the numbers 1 to N

const ns: number = 16;

let sum: number = 0;
for (let i = 1; i <= ns; i++) {
    sum += i;
}
console.log(sum);
sum = 0

// Or just use a formula...
console.log(ns * (ns + 1) / 2)