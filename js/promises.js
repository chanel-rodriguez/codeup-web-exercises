'use strict'


// Write a function named wait that accepts a number as a parameter,
//     and returns a promise that resolves after the passed number of milliseconds.

function wait(num){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if (num !== 0) {
            resolve('some data');
        } else {
            reject('invalid milliseconds');
        }
    },num);
    });
}
//
// wait(0).catch((data) => console.log(data));
// wait(1000).then((x) => console.log('You\'ll see this after 1 second ' + x));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));







// fetch('https://api.github.com/users', {headers: {'Authorization': 'TokenKey'}});


function lastCommit(username){
    fetch(`https://api.github.com/users/${username}/events/public`, {headers:
     {'Authorization': 'token 53f1e1315324b557fc6c93380444de9c48925b0c' }}).then(response =>{
        response.json().then(data => {
            console.log(data[0][0]);
        })
    });
}


lastCommit('channel-rodriguez92');





