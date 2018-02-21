'use strict';
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// console.log(users.filter(obj => obj.languages.length > 2));
// console.log(users.map(({email}) => email ));

// console.log(users.reduce((acc, obj) => {
//     acc[obj.id] = obj;
//     return acc;
// }, {}));








//################# BONUS ######################

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit
// console.log(fruits.map(ele => ele[0]));

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

// console.log(customers.map(obj => ({name:obj.name, age:obj.age})));

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// console.log(customers.filter(obj => obj.occupation === 'Police Officer' || obj.occupation === 'Teacher'));

// PROBLEM 4 - determine the average age of customers
// console.log(customers.reduce((total, obj, i) => total + (obj.age - total) / (i + 1), 0));


//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()





// Given the following array...
const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties

// console.log(names.map(name => name + ' Smith'));
// console.log(names.map(name => name.toUpperCase()));
// console.log(names.filter(name => name.length > 3));
// console.log(names.map(name => name.substr(name.length - 2)));
// console.log(names.reduce((sum, name) => sum + name.length, 0));
// console.log(names.join('').split('').sort().join(''));
//     console.log(names.reduce((str, name) => str + name, '').split('').sort().join(''));
// console.log(names.map(name =>({name: name, wordLength: name.length, firstLetter: name[0], lastLetter: name[name.length - 1]})))
// console.log(names.reduce((str, name) => str + name.match(/[aeiou]/g).join(''), ''));








//##############   MORE BONUSES   ##############################

const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];


const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
}
console.log(output);