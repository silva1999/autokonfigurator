/*
	Autor:		Leandro Silva
	Datum:		02.11.2017
	Programm:	Autokonfigurator
	
	Beschreibung: 	Das ist ein Javascript, welches für die Auswahl von einem Bmw gebarucht wird.
 */

//Die Funktion spielt eine Audiodatei ab und ruft danach eine neue Seite auf.
function startEngine(){
    var audio = document.getElementById('engineSound');
    audio.play();
    audio.addEventListener('ended',function(){
        window.location = '/M152_Autokonfigurator/AutokonfiguratorBmw.html';
    });
}