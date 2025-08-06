// DataTypes-2
const udemyUserName = "Sane Aalam";
const udemyUserId = 489110101;
const udemyCourseCompleted = true;
const EnrollCourse = 18;
const amountPayment = 1699.91;
const udemyCourses = [
  {
    title: "Node.js - Beginner to Advanced Course with Projects",
    instructor: "John Doe",
    url: "https://www.udemy.com/course/nodejs-beginner-to-advanced/",
    topics: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Deployment"],
    progress: "Section 2 - Node.js File System",
    rating: 4.2,
  },
  {
    title: "Master JavaScript: The Complete Guide",
    instructor: "Jane Smith",
    url: "https://www.udemy.com/course/master-javascript-complete/",
    topics: ["JavaScript", "DOM", "ES6+", "Async/Await", "OOP"],
    progress: "Completed",
    rating: 4.1,
  },
  {
    title: "React - The Complete Guide (incl Hooks, Redux)",
    instructor: "Maximilian Schwarzmüller",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    topics: ["React", "Hooks", "Redux", "Routing", "Deployment"],
    progress: "Section 9 - Redux Integration",
    rating: 3.9,
  },
  {
    title: "Build RESTful APIs with Node and Express",
    instructor: "Mosh Hamedani",
    url: "https://www.udemy.com/course/nodejs-master-class/",
    topics: ["Node.js", "Express.js", "MongoDB", "Authentication", "JWT"],
    progress: "Section 4 - CRUD APIs",
    rating: 3.1,
  },
  {
    title: "SQL & Database Design A-Z™: Learn MS SQL Server + PostgreSQL",
    instructor: "Kirill Eremenko",
    url: "https://www.udemy.com/cou",
    topics: ["Node.js", "Express.js", "MongoDB", "Authentication", "JWT"],
    progress: "Section 4 - CRUD APIs",
    rating: 3.5,
  },
];

// print all data
console.log(udemyUserName);
console.log(udemyUserId);
console.log(udemyCourseCompleted);
console.log(EnrollCourse);
console.log(amountPayment);
console.log(udemyCourses);

// print all data-type
console.log(typeof udemyUserName);
console.log(typeof udemyUserId);
console.log(typeof udemyCourseCompleted);
console.log(typeof EnrollCourse);
console.log(typeof amountPayment);
console.log(typeof udemyCourses);

// output:
// string
// number
// boolean
// number
// number
// object
