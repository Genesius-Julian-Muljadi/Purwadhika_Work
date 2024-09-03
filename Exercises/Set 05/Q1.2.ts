// Q: Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function sentencelist(inputarray: Array<string>) {
    if (inputarray.length === 0) {
        return "";
    };

    let output: string = "";
    for(let i=0;i<inputarray.length - 1;i++) {
        output = output + inputarray[i] + ", ";
    };

    output = output + "and " + inputarray[inputarray.length - 1];
    // console.log(output);  // Check output with Quokka
    return output;
};

sentencelist(["Hello", "world", "ladies", "and", "gentlemen"]);
sentencelist(["Onewordonly"]);