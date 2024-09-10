// Q: Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example : 
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result : 
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]

interface StudentData {
    name: string;
    email: string;
};

function objectsareequalset07q3(o1: Object, o2: Object): boolean {  // Function from Q1
    let index1: number = 0;
    let index2: number = 0;

    for (let m in o1) {
        for (let n in o2) {
            if (index1 !== index2) {
                index2++;
                continue;
            } else if (m !== n || o1[m] !== o2[n]) {
                return false;
            } else {
                break;
            };
        };
        index1++;
        index2 = 0;
    };

    for (let n in o2) {
        index2++;
    };
    if (index1 !== index2) {
        return false;
    };

    return true;
};

function studentmerge(a1: Array<StudentData>, a2: Array<StudentData>): Array<StudentData> {
    const output: Array<StudentData> = a1;

    for (let i=0;i<a2.length;i++) {
        // Check if any students in a2 match any students in a1
        // Cannot use Array.includes() due to array values being objects
        if (!output.some((s: StudentData) => objectsareequalset07q3(s, a2[i]))) {
            output.push(a2[i]);
        };
    };

    return output;
};

const Array1: Array<StudentData> = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 2', email: 'student2@mail.com'}
];
const Array2: Array<StudentData> = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 3', email: 'student3@mail.com'}
];
const ArrayResult: Array<StudentData> = studentmerge(Array1, Array2);
console.log(ArrayResult);
console.log(ArrayResult[0]);
console.log(ArrayResult[1]);
console.log(ArrayResult[2]);
console.log(ArrayResult[3]);
