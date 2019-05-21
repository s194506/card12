

function compare() {

var liczba1 = document.getElementById('l1').value;
var liczba2 = document.getElementById('l2').value;	

if(liczba1==liczba2) document.getElementById('wynik').innerHTML = "rowna";
else if(liczba1>liczba2) document.getElementById('wynik').innerHTML = "wieksza";
else if(liczba1<liczba2) document.getElementById('wynik').innerHTML = "mniejsza";


}

btn.addEventListener('click',compare);
