// Q: Write a code to get difference between dates in days.

const input_date_01 = new Date("2024-11-01");
const input_date_02 = new Date("2024-06-09");

console.log(Math.abs((input_date_01 - input_date_02) / (24 * 3600 * 1000)));

// Math.abs takes the absolute value. Difference shouldn't be negative.