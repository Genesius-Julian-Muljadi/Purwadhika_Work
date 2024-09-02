// Q: Write a conditional statement to sort three numbers

const intt1: number = 5;
const intt2: number = 942;
const intt3: number = 4;

let sorted: string = "";
if (intt1 <= intt2 && intt1 <= intt3) {
    sorted = sorted + intt1.toString();
    sorted = sorted + ", ";
    if (intt2 <= intt3) {
        sorted = sorted + intt2.toString();
        sorted = sorted + ", "
        sorted = sorted + intt3.toString();
    } else {
        sorted = sorted + intt3.toString();
        sorted = sorted + ", "
        sorted = sorted + intt2.toString();
    }
} else if (intt2<= intt1 && intt2 <= intt3) {
    sorted = sorted + intt2.toString();
    sorted = sorted + ", ";
    if (intt1 <= intt3) {
        sorted = sorted + intt1.toString();
        sorted = sorted + ", "
        sorted = sorted + intt3.toString();
    } else {
        sorted = sorted + intt3.toString();
        sorted = sorted + ", "
        sorted = sorted + intt1.toString();
    }
} else {
    sorted = sorted + intt3.toString();
    sorted = sorted + ", ";
    if (intt1 <= intt2) {
        sorted = sorted + intt1.toString();
        sorted = sorted + ", "
        sorted = sorted + intt2.toString();
    } else {
        sorted = sorted + intt2.toString();
        sorted = sorted + ", "
        sorted = sorted + intt1.toString();
    }
};

console.log(sorted);