/*
	Autor:		Leandro Silva
	Datum:		02.11.2017
	Programm:	Autokonfigurator
	
	Beschreibung: 	Das ist ein Javascript, welches für die Auswahl von einem Mercedes gebarucht wird.
 */
function startEngine(){
    var audio = document.getElementById('engineSound');
    audio.play();
    audio.addEventListener('ended',function(){
        window.location = '/M152_Autokonfigurator/AutokonfiguratorMercedes.html';
    });
}