var txt1 = 'kamil';

function napis(){

	var txt = document.getElementById('tt');
	if(txt == txt1) { 
	document.getElementById('wynik').innerHTML = "taki samo";
	}
	else if(txt != txt1) {
	document.getElementById('wynik').innerHTML = "inny";
	}
}
sub.addEventListener('click',napis);

//proba