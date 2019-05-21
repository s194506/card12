function zmiana(event){
	
	console.log(event);
	var change = document.getElementById('btn1');
	change.style.backgroundColor = 'green';
	
	
}

function zwieksz(event) {
	var bigger = document.getElementById('btn1');
	bigger.style.width='100px';
	bigger.style.height='200px';
}

btn1.addEventListener('click',zmiana);
btn1.addEventListener('click',zwieksz);