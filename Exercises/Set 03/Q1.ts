// Q: Write a code to display the multiplication table of a given integer.

const n: number = 7;

const mult_table_cap: number = 12; // Adjust how far the table goes
for (let i = 1; i <= mult_table_cap; i++) {
    console.log(`${n} x ${i} = ${n*i}\n`);
};