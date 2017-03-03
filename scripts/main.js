var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

var storedName = localStorage.getItem('name');
if (!storedName) {
	setUserName();
}
else {
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}