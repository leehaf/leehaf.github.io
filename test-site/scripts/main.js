var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ethel.jpg') {
        myImage.setAttribute ('src','images/ethel2.jpg');
    }  else {
        myImage.setAttribute ('src','images/ethel.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}