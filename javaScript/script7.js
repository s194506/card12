
var btn1 = document.getElementById('btn1');

function change(event) {
	
	btn1.style.backgroundColor = 'blue';
}

btn1.addEventListener('keydown',change);