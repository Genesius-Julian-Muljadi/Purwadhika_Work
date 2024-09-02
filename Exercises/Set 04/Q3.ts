// Q: Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

function bmi (weight: number, height: number) {
    let bmin: number = weight / (height * height);
    let bmis: string = "undefined";                     // Q does not specify return value for BMI between 24.9 - 25.0 & 29.9 - 30.0
    if (bmin < 18.5) {
        bmis = "less weight";
    } else if ((bmin >= 18.5) && (bmin <= 24.9)) {
        bmis = "ideal";
    } else if ((bmin >= 25.0) && (bmin <= 29.9)) {
        bmis = "overweight";
    } else if ((bmin >= 30.0) && (bmin <= 39.9)) {
        bmis = "very overweight";
    } else if (bmin > 39.9) {
        bmis = "obesity";
    };
    // console.log(bmis);                               // Check output with Quokka
    return bmis;
};

bmi(80, 1.8);
bmi(85, 1.78);