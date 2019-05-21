function mousePointer(event){
	var locX = event.clientX;
	var locY = event.clientY;
	
	document.getElementById('l1').innerHTML = locX;
	document.getElementById('l2').innerHTML = locY;
	
}

document.addEventListener('mousemove',mousePointer);
