'use strict'


// Write a function named wait that accepts a number as a parameter,
//     and returns a promise that resolves after the passed number of milliseconds.

function wait(num){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if (num !== 0) {
            resolve();
        } else {
            reject('invalid milliseconds');
        }
    },num);
    });
}

// wait(0).catch((data) => console.log(data));
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));





// api: 86027bb23f8c3cc835df5579f3404e803cb4c525

// fetch('https://api.github.com/users', {headers: {'Authorization': '86027bb23f8c3cc835df5579f3404e803cb4c525'}});


function lastCommit(username){
    fetch(`https://api.github.com/users/${username}/events/public`, {headers:
     {'Authorization': 'token 86027bb23f8c3cc835df5579f3404e803cb4c525' }}).then(response =>{
        response.json().then(data => {
            console.log(data);
        })
    });
}


lastCommit('channel-rodriguez92');





