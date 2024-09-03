// Q: Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function lowhighmed (inputarray: Array<number>) {
    if (inputarray.length === 0) {
        return "Please input values in array";
    };

    let low: number = inputarray[0];
    let high: number = inputarray[0];
    let sum: number = 0;
    for(let i=0;i<inputarray.length;i++) {
        if (inputarray[i] < low) {
            low = inputarray[i];
        } else if (inputarray[i] > high) {
            high = inputarray[i];
        };
        sum += inputarray[i];
    };
    let output: string =`lowest: ${low}, highest: ${high}, average: ${sum / inputarray.length}`
    // console.log(output);  // Check output with Quokka
    return output;
};

lowhighmed([45,4,6462,75,345,345,35,73,46,8,3]);