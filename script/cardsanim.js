function animation() {
	var elem = document.getElementById("cardentity");
	var pos = 0;
	var id = setInterval(frame, 5);

	function frame(){
		if (pos == 250) {
			clearInterval (id);}
		else {
			pos++;
			elem.style.bottom = (pos + "px");
			elem.style.right = (pos +  "px");
		}
	}
}