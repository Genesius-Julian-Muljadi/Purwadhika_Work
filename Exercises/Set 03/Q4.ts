// Q: Write a code to format number as currency (IDR)

const v: number = 500342000;

let vt: string = v.toString();
let vtl: number = vt.length;
let pos: number = 1; // Will append "." every 3 digits.

let newv: string = ""; // Will append digits to this string.
while (vtl > 0) {
    newv = vt[vtl-1] + newv; // Append rightmost number to left of new string
    if (pos < 3) {
        pos++;
    } else {
        if (vtl <= 1) break; // Prevent extraneous "." on initial v with digit count multiple of 3.
        newv = "." + newv; // Insert "." every 3 digits
        pos = 1;
    }
    vtl--;
}; pos = 1; vtl = vt.length;

console.log(`Rp. ${newv},00`);