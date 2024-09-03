// Q: Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 

// We will assume output is a single string

function fizzbuzz35 (iter: number) {
    if (iter < 1) {                                         // Input must be >= 1
        console.log("Please input integer >= 1");
        return;
    };

    let fizzbuzzstr: string = "";
    for(let i = 1; i <= iter; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzzstr = fizzbuzzstr + "FizzBuzz";
        } else if (i % 5 === 0) {
            fizzbuzzstr = fizzbuzzstr + "Buzz";
        } else if (i % 3 === 0) {
            fizzbuzzstr = fizzbuzzstr + "Fizz";
        } else {
            fizzbuzzstr = fizzbuzzstr + i.toString();
        };
        if (i < iter) {
            fizzbuzzstr = fizzbuzzstr + ", ";
        };
    };
    // console.log(fizzbuzzstr);                            // Check output with Quokka
    return fizzbuzzstr;
};

console.log(fizzbuzz35(30));
console.log(fizzbuzz35(4));