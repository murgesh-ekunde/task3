//Input
let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

//For...of loop
for (let value of object){
    console.log(value)
}

//for...in loop
for (let key in object) {               //assigning key 
    if (object.hasOwnProperty(key)){    //Check if object posseses own property for key
     //Display the values using template literal
        console.log(`                   
        Person: ${object[key].person}
        Age: ${object[key].age}
        Company: ${object[key].company}
        `);
    }
}

// using forEach
object.forEach((key) => {           // used arrow function and callback
 //Displayin the values using template literal
    console.log(`
    Person: ${key.person}
    Age; ${key.age}
    Company: ${key.company}
    `)
});

//using For loop
for (let i=0; i<object.length; i++){ //index i will start with 0th positiion till last index that is lenght of object
 //Displayin the values using template literal 
    console.log(`
    Person: ${object[i].person}
    Age; ${object[i].age}
    Company: ${object[i].company}
    `)
}

