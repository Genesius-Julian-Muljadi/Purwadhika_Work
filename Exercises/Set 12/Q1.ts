// Q: Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function findMajority(arr: Array<number>): number | null {
    let output: number | null = null;
    let count: number = 0;

    // Since majority element is guaranteed, this algorithm can find that majority
    for (let i=0;i<arr.length;i++) {
        // Decrease count if value is dissimilar
        if (arr[i] !== output) {
            count--;
        // Increase count if value is similar
        } else {
            count++;
        };
        
        // If too many dissimilar values found, switch to new value
        if (count < 0) {
            output = arr[i];
            count = 1;
        };
    };
    // Algorithm is guaranteed to find majority value with positive count
    return output;
};

console.log(findMajority([]));  // null
console.log(findMajority([5]));  // 5
console.log(findMajority([3, 2, 3]));  // 3
console.log(findMajority([2, 1, 1, 1, 2, 2, 2]));  // 2
console.log(findMajority([4, 1, 3, 1, 2, 3, 1, 1, 1, 4, 1, 3, 1]));  // 1