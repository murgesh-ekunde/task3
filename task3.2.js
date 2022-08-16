//defining Resume JSON using var variable
var Resume=[                                
    {"Name":"Murgesh Shivkumar Ekunde",         //"key":"Value"
    "age":25,
    "Qualification":"B.E. Mechanical",
    "Skills" : "Javascript, HTML, CSS, Typescript, ReactJS",
    "Hobbies": "Playing games, Writing Blogs "}
]

Resume.forEach((key) => {           // used arrow function and callback
// //Displayin the values using template literal
console.log(`
Name: ${key.Name}
Age; ${key.age}
Qualification: ${key.Qualification}
Skills: ${key.Skills}
Hobbies: ${key.Hobbies}
`)
});