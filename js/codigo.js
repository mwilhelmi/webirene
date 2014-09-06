


var MapLink = 'https://goo.gl/maps/YQKum';

// muestra la consulta en google maps
// TODO mejorarla pillando los datos de localizacion del movil si los tiene para como llegar
function showLocation()
{
    var mapa = document.getElementById("map");
	mapa.style.display = 'block';
	
	var mapaWidth = calcularAnchoMapa();
	
	var googleMapConsulta = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.115332109069!2d-3.7086921!3d40.4480314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e0e5edf7b8dd0f7!2sIrene+Casanova+Psic%C3%B3loga!5e0!3m2!1sen!2ses!4v1386840300276" width="' + mapaWidth + '" height="300" frameborder="0" style="border:0"></iframe>';
	
	mapa.innerHTML = googleMapConsulta + " <br> <button onclick='ocultarMapa()'>Ocultar</button>";
}

// oculta el mapa
function ocultarMapa()
{
    debugger;
    var e = document.getElementById("map");
    if(e.style.display == 'block')
	    e.style.display = 'none';    
}

function calcularAnchoMapa()
{
	// obtengo dimensiones de la pantalla
	var ScreenWidth  = window.innerWidth;

	if (ScreenWidth >= 960)
		return 960;

	if (ScreenWidth >= 768)
		return 768;

	if (ScreenWidth >= 420)
		return 420;

	if (ScreenWidth >= 300)
		return 300;	

	return 300;
}