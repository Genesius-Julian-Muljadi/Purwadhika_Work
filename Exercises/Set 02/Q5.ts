// Q: Write a code to print the first N fibonacci numbers
// Unsure of what the question is asking for, since the example result doesn't follow from the question.

const nfib: number = 15;

let fib1: number = 1;
let fib2: number = 0;
let fib3: number = 1;
let fibt: number = 0;

// List all fibonacci numbers up to N
for (let i = 1; i <= nfib; i++) {
    console.log(fib1);
    fibt = fib3; fib3 = fib2; fib2 = fib1;
    fib1 = fib2 + fib3;
};
fib1 = 1; fib2 = 0; fib3 = 1; fibt = 0;

// List only Nth fibonacci number
for (let i = 1; i < nfib; i++) {
    fibt = fib3; fib3 = fib2; fib2 = fib1;
    fib1 = fib2 + fib3;
};
console.log(fib1);
fib1 = 1; fib2 = 0; fib3 = 1; fibt = 0;