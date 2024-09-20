// Q: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// We will assume input is a whole number

function climbCount12(input: number): number {
    if (input === 0) {
        return 0;
    };

    // Define combinatorial choose function
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

    // Start calculating output
    // Start with base case of taking steps of all 1s
    // Gradually replace pairs of 1s with 2s and calculate all permutations
    let output: number = 0;
    for (let i = 0; i <= input / 2; i++) {
        output += mathChoose(input - i, i);
    };

    return output;
};

console.log(climbCount12(0));  // 0
console.log(climbCount12(1));  // 1
console.log(climbCount12(2));  // 2
console.log(climbCount12(3));  // 3
console.log(climbCount12(4));  // 5
console.log(climbCount12(10));  // 89
