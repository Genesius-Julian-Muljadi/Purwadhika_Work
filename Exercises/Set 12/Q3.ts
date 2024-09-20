// Q: Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

// We will assume input is a whole number

function pascalT(numRows: number): Array<Array<number>> {
    if (numRows === 0) {
        return [];
    };

    // Combinatorial choose function from Set 11 Q4.ts
    const mathChoose: Function = (n: number, k: number): number => {
        try {
            if (n - k < 0) {
                throw new Error(`Input error: ${n} < ${k}`);
            } else if (n <= 0) {
                throw new Error('Input error: Please input n > 1');
            }
        } catch (error: any) {
            console.log(error.message);
        };

        // Define factorial function
        const mathFactorial: Function = (a: number): number => {
            if (a === 0 || a === 1) {
                return 1;
            };

            let output2: number = 1;
            for (let i=2;i<=a;i++) {
                output2 *= i;
            };
            return output2;
        };

        return mathFactorial(n) / (mathFactorial(k) * mathFactorial(n - k));
    };

    // The elements for each row i are just the coefficients for the binomial expansions of degree i
    const output: Array<Array<number>> = [[1]];  // Start with degree 0 expansion, because mathChoose cannot accept 0 as first input
    for (let i = 1; i < numRows; i++) {
        const t: Array<number> = [];
        for (let j = 0; j <= i; j++) {
            t.push(mathChoose(i, j));
        };
        output.push(t);
    };

    return output;
};

console.log(pascalT(0));  // []
console.log(pascalT(1));  // [[1]]
console.log(pascalT(5));  // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(pascalT(7));  // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]]