let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    let userNames = [];

    for (let user of users) {
        userNames.push(user['name']);
    }

    console.log(userNames);
    let i ;
    for (i = 0; i<250;i++){
        
        console.log(users[i].flag);
        
    } 
    console.log(users.length)
};


xhr.send();