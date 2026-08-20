const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [
    {
        name: "Ankit",
        branch: "CSE",
        subject: "Java",
        marks: 85,
        city: "Ghaziabad"
    },
    {
        name: "Priya",
        branch: "ECE",
        subject: "Python",
        marks: 78,
        city: "Delhi"
    },
    {
        name: "Rahul",
        branch: "CSE",
        subject: "Java",
        marks: 92,
        city: "Noida"
    },
    {
        name: "Sneha",
        branch: "IT",
        subject: "JavaScript",
        marks: 88,
        city: "Delhi"
    },
    {
        name: "Aman",
        branch: "ME",
        subject: "Python",
        marks: 67,
        city: "Meerut"
    },
    {
        name: "Neha",
        branch: "CSE",
        subject: "Java",
        marks: 95,
        city: "Ghaziabad"
    },
    {
        name: "Rohit",
        branch: "ECE",
        subject: "C++",
        marks: 72,
        city: "Noida"
    },
    {
        name: "Kavya",
        branch: "IT",
        subject: "JavaScript",
        marks: 91,
        city: "Ghaziabad"
    }
];

console.log("Choose an option:");
console.log("1. Filter by Branch");
console.log("2. Filter by Subject");
console.log("3. Filter by City");
console.log("4. Students with marks greater than 80");
console.log("5. Get only student names");
console.log("6. Calculate total marks");
console.log("7. Calculate average marks");

rl.question("Enter your choice: ", (choice) => {

    switch (Number(choice)) {

        case 1:
            rl.question("Enter branch: ", (branch) => {

                let result = students.filter(student =>
                    student.branch.toLowerCase() === branch.toLowerCase()
                );

                console.log(result);
                rl.close();
            });
            break;

        case 2:
            rl.question("Enter subject: ", (subject) => {

                let result = students.filter(student =>
                    student.subject.toLowerCase() === subject.toLowerCase()
                );

                console.log(result);
                rl.close();
            });
            break;

        case 3:
            rl.question("Enter city: ", (city) => {

                let result = students.filter(student =>
                    student.city.toLowerCase() === city.toLowerCase()
                );

                console.log(result);
                rl.close();
            });
            break;

        case 4:
            let result = students.filter(student => student.marks > 80);

            console.log(result);
            rl.close();
            break;

        case 5:
            result = students.map(student => student.name);

            console.log(result);
            rl.close();
            break;

        case 6:
            result = students.reduce(
                (total, student) => total + student.marks,
                0
            );

            console.log("Total Marks:", result);
            rl.close();
            break;

        case 7:
            result = students.reduce(
                (total, student) => total + student.marks,
                0
            ) / students.length;

            console.log("Average Marks:", result);
            rl.close();
            break;

        default:
            console.log("Invalid choice");
            rl.close();
    }
});