// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// Q isn't commprehensive, so we will assume input is a whole number
// Will also assume output is a string, as shown above

function rfact(n: number): string {  // Assume whole number input
    if (n === 0) {
        return '0! = 1';
    } else if (n === 1) {
        return '1! = 1';
    };

    let o: number = 1;
    let os: string = `${n}! = `;

    function rmult(n2: number): void {  // Q requires function utilize recursion
        if (n2 > 1) {
            o *= n2;
            os += `${n2} x `;
            return rmult(n2 - 1);
        } else {
            os += '1 = ';
            return;
        };
    };

    rmult(n);
    
    os += o;
    return os;
};

console.log(rfact(0));  // '0! = 1'
console.log(rfact(1));  // '1! = 1'
console.log(rfact(2));  // '2! = 2 x 1 = 2'
console.log(rfact(5));  // '5! = 5 x 4 x 3 x 2 x 1 = 120'
console.log(rfact(6));  // '6! = 6 x 5 x 4 x 3 x 2 x 1 = 720'
console.log(rfact(7));  // '7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5040'

console.log(rfact(25));
// '25! = 25 x 24 x 23 x 22 x 21 x 20 x 19 x 18 x 17 x 16 x 15 x 14 x 13 x 12 x 11 x 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 1.5511210043330984e+25'