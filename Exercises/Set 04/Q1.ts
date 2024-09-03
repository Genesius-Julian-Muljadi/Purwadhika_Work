// Q: Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

// We will assume output is a single string

function trinumerate (height: number) {
    if (height < 1) {                                           // Height must be >= 1
        console.log("Please input integer >= 1");
        return;
    };

    let count: number = 1;
    let countn: string = "";
    for (let i=1;i<=height;i++) {
        for (let j=1;j<=i;j++) {
            let countstr: string = count.toString();
            if (countstr.length < 2) {
                countstr = '0' + countstr;                      // Output, according to Q, seems to be in 2 digit strings
            };
            countn = countn + countstr + " ";
            count++;
        };
        countn = countn.trimEnd() + "\n";
    };
    countn = countn.trimEnd();
    // console.log(countn);                                     // Check output with Quokka
    return countn;
};

console.log(trinumerate(5));
console.log(trinumerate(4));