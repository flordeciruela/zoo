
var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function(){

	for (var i in img) {
		if (select.value == "original") {
			img[i].classList.remove("blanco-negro","invertir-colores","sepia");

		}else if (select.value == "blanco-negro") {
			img[i].classList.add("blanco-negro");
			img[i].classList.remove("invertir-colores","sepia");

		}else if (select.value == "invertir-colores") {
			img[i].classList.add("invertir-colores");
			img[i].classList.remove("blanco-negro","sepia");

		}else if (select.value == "sepia") {
			img[i].classList.add("sepia");
			img[i].classList.remove("blanco-negro","invertir-colores");

		}
	}

}
