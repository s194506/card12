function wypisz(event) {

var liczba1 = document.getElementById('l1').value;
var liczba2 = document.getElementById('l2').value;
var napis = "";

if(liczba1<liczba2){
	for(i=liczba1;i<=liczba2;i++){
	napis = napis + i + " ";
	}
	document.getElementById('wynik').innerHTML = napis;
}

else if(liczba1>liczba2){
	for(i=liczba1;i>=liczba2;i--){
	napis = napis + i + " ";
	}
	document.getElementById('wynik').innerHTML = napis;
}

}

btn.addEventListener('click',wypisz);