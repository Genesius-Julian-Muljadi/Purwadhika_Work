// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

function separate (inputstr: string) {
    let outputarray: Array<string> = [];
    let len: number = inputstr.length;
    let w: number = 0;
    let ws: string = "";
    for (let i = 0; i < len; i++) {
        if (inputstr[i] === " ") {
        // if (/\s/.test(inputstr[i])) {  // This condition is better as it checks for all whitespace, not just " "
            w++;
            if (ws !== "") {  // Account for multiple whitespace characters in a row
                outputarray.push(ws);
            };
            ws = "";
        } else {
            ws = ws + inputstr[i];
        }
    }
    if (ws !== "") {
        outputarray.push(ws);
    };
    // console.log(outputarray);   // Check output with Quokka
    return outputarray;
};

separate("hello       world hi   test123");
separate("In the beginning God created the heaven and the earth.")