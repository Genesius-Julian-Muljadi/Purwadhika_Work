// Q: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

function singleOut(arr: Array<number>): number {
    // Sorting the array makes things easier
    const sortarr: Array<number> = arr.sort((a: number, b: number) => a - b);
    let candidate: number | undefined = sortarr.pop();

    // Check elements two-at-a-time for equivalence
    while (sortarr.length > 0) {
        const c: number | undefined = sortarr.pop();
        if (candidate === c) {
            candidate = sortarr.pop();
        } else {
            break;
        };
    };

    if (candidate == undefined) {
        console.log('Input error')
        return -1;
    } else {
        return candidate;
    };
};

console.log(singleOut([1]));  // 1
console.log(singleOut([2, 1, 1]));  // 2
console.log(singleOut([4, 1, 2, 1, 2]));  // 4
console.log(singleOut([88, 45, 34 ,62, 88, 34, 62]));  // 45