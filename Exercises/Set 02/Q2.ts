// Q: Write a code to check whether the number is prime number or not

const p: number = 831739;

// Standard primality test
let ps: string = "is a prime number";
for (let i = 2; i <= Math.sqrt(p); i++) { // Only need to check up to square root
    if (p % i === 0) {
        ps = "is not a prime number";
        break;
    } else continue;
};

console.log(`${p} ${ps}`);