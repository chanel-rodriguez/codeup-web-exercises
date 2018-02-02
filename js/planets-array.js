// (function(){
//     "use strict";
//
//     var planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];
//
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */
//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     planets.unshift("The Sun");
//     console.log(planets);
//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     planets.push('Pluto');
//     console.log(planets);
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     planets.shift();
//     console.log(planets);
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     planets.pop();
//     console.log(planets);
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//     console.log(planets.indexOf('Earth'));
//
//     console.log("Reversing the order of the planets array.");
//     planets.reverse();
//     console.log(planets);
//
//     console.log("Sorting the planets array.");
//     planets.sort();
//     console.log(planets);
// })();


function phoneParser(str){
    var number = str.split('');
    var newNum =[];
    var lastFour = number.splice(number.length-4);
    lastFour.unshift('-');
    newNum=lastFour.concat(newNum);
    while(number.length > 3){
        lastFour = number.splice(number.length-3)
        lastFour.unshift('-');
        newNum= lastFour.concat(newNum);
    }
    return number.concat(newNum).join("");
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function studentRoster(){
    var students = [];
    var action;
    while (action != 0){
    action = prompt("What would you like to do? Enter a Number" +
        "\n1) Add a student name" +
        "\n2) Delete a student name" +
        "\n3) View all student names in alphabetical order" +
        "\n4) View all student names in reverse alphabetical order" +
        "\n0) Exit");

    if (!isNumeric(action)){
        continue;
    }
    switch (action){
        case '1':
            var name = prompt("Enter the Students first name");
            var index = students.indexOf(name);
            (index < 0) ? students.push(name) : alert("That name already exists");
            break;
        case '2':
             index = students.indexOf(prompt("enter the student's name: "));
            (index < 0) ? alert("That name does not exist") : students.splice(index,1);
            break;
        case '3':
            console.log(students.sort());
            break;
        case '4':
            console.log(students.sort().reverse());
            break;
        case '0':
            console.log("Goodbye!");
            break;

    }

    }
}






