'use strict';
let deDiv = document.getElementById('myDiv');

let deKnop = document.getElementById('themaKnop');
deKnop.addEventListener('click', function() {
	document.body.style.backgroundColor = 'black';
    deDiv.style.color='white'
    deDiv.style.textDecoration = 'none';
    const links = document.getElementsByTagName('a');
    links.style.color = 'lightblue';

})