/*
	Autor:		Leandro Silva
	Datum:		02.11.2017
	Programm:	Autokonfigurator
	
	Beschreibung: 	Das ist ein Javascript, welches für den BMW Konfigurator verwendet wird.
 */


/* ---------- Felgen Auswahl ---------- */
//Methode wechselt zu nächster Felge
function next() {
	//Definition der Variablen
	var verzeichnis = "/M152_Autokonfigurator/resources/images/bmw_images/";
	var bilder = ["bbsfelge2.png",
		              "bbsfelge3.png",
		              "bbsfelge4.png",
		              "bmwm3felge.png",
		              "bmwm3felge2.png",
		              "originalbmwfelge.jpeg"];
	
	//Hole momentanes Element
	var zaehlerAsString = document.getElementById('zaehler').value;
	var zaehler = parseInt(zaehlerAsString);
	
	//Setze index von neuem Element
	zaehler = zaehler + 1;
	if(zaehler >= bilder.length){
		zaehler = 0;
	}
	
	//Hole Bildnamen der Felge und setze neuen Index
	var bild = bilder[zaehler];
	document.getElementById('zaehler').value = zaehler;
	
	//Setze neues Bild
	document.getElementById('felgevorschau').src = verzeichnis + bild;
	document.getElementById('bildfelgevorne').src = verzeichnis + bild;
	document.getElementById('bildfelgehinten').src = verzeichnis + bild;
	
	
	window.load;
}

//Methode wechselt zur vorherigen Felge
function ruckgang() {
	//Definiion von Variablen
	var verzeichnis = "/M152_Autokonfigurator/resources/images/bmw_images/"
	var bilder = ["bbsfelge2.png",
		              "bbsfelge3.png",
		              "bbsfelge4.png",
		              "bmwm3felge.png",
		              "bmwm3felge2.png",
		              "originalbmwfelge.jpeg"];
	
	//Hole momentanes Element
	var zaehlerAsString = document.getElementById('zaehler').value;
	var zaehler = parseInt(zaehlerAsString);
	
	//Berechne neues Element
	zaehler = zaehler - 1;
	if(zaehler < 0){
		zaehler = bilder.length - 1;
	}
	
	//Hole entsprechendes Bild
	var bild = bilder[zaehler];
	document.getElementById('zaehler').value = zaehler;
	
	//Aktualisiere und ändere Bild
	document.getElementById('felgevorschau').src = verzeichnis + bild;
	document.getElementById('bildfelgevorne').src = verzeichnis + bild;
	document.getElementById('bildfelgehinten').src = verzeichnis + bild;
		
	window.load;
}

/* ---------- Auspuff Auswahl ---------- */
//Funktion wechselt Audio Datei
function auspuff(){
	//Definition der Variablen
	var verzeichnis = "/M152_Autokonfigurator/resources/audio/bmw_audio/";
	var audios = ["e92remus",
		              "e92eisenmann",
		              "e92akrapovic"];
	var infos = ["Remus",
		         "Eisenmann",
		         "Akrapovic"];
	
	//Hole gedrücktes Element
	var selectedAsString = document.getElementById('auspuff').value;
	var selected = parseInt(selectedAsString);
	
	//Hole neue Audiodatei und Text
	var audio = audios[selected];
	var info = infos[selected];
	
	//Aktualisiere Seite mit neuer Audiodatei und Text
	document.getElementById('soundName').innerHTML = info;
	document.getElementById('srcmp3').src = verzeichnis + "mp3/" + audio + ".mp3";
	document.getElementById('srcmp2').src = verzeichnis + "mp2/" + audio + ".mp2";
	document.getElementById('srcogg').src = verzeichnis + "ogg/" + audio + ".ogg";
	document.getElementById('soundcheck').load();
	
	window.load;
}

/* ---------- Lackierung Auswahl ---------- */
//Funktion wechselt die Lackierung von dem Auto
function lackierung(){
	//Definition der Variablen
	var verzeichnis = "/M152_Autokonfigurator/resources/images/bmw_images/";
	var bilder = ["bmwe92weiss2.png",
	              "bmwe92blau2.png",
	              "bmwe92schwarz2.png",
	              "bmwe92braun2.png"];
	var felgehintentop = [0.2,
	              0.2,
	              0.2,
	              0];
	var felgehintenleft = [0.5,
	    	              0,
	    	              0,
	    	              0.5];
	var reifenhintentop = [0.2,
	    	              0.2,
	    	              0.2,
	    	              0];
	var reifenhintenleft = [0.5,
		    	              0,
		    	              0,
		    	              0.5];
	var bremsehintenleft = [0.5,
		    	            0,
		    	             0,
		    	            0];
	var felgevorneleft = [0,
		    	          1.2,
		    	          1.2,
		    	          2.2];
	var reifenvorneleft = [0,
		    	           1.2,
		    	           1.2,
		    	           2.2];
	var bremsevorneleft = [0,
		    	           1.2,
		    	           1.2,
		    	           1.7];
	var spiegelwidth = [0,
		    	        1.5,
		    	        1.5,
		    	        1.5];
	var spiegelheight = [0,
		    	         15,
		    	         15,
		    	         15];
	var spiegeltop1 = [6.5,
			    	     2,
			    	     2,
			    	     2.5];
	var spiegeltop2 = [4.5,
		    	     1,
		    	     1,
		    	     1];
	var spiegeltop3 = [4,
			    	     0,
			    	     0,
			    	     0];
	var spiegelleft = [0.5,
		    	      0,
		    	      0,
		    	      0];
	var karrosserietop1 = [3,
			    	     2,
			    	     2,
			    	     2.5];
	var karrosserietop2 = [1,
		    	     1,
		    	     1,
		    	     1];
	var karrosserietop3 = [0.5,
			    	     0,
			    	     0,
			    	     0];
	
	//Hole gedrücktes Element
	var selectedAsString = document.getElementById('farbe').value;
	var selected = parseInt(selectedAsString);
	var bild = bilder[selected];
	
	//Setze neues Bild
	document.getElementById('karosserie').src = verzeichnis + bild;
	
	//Aktualisiere CSS mit der Konfiguration
	var fhintentop = parseFloat(document.getElementById('felgehintentop').value);
	var fhintenleft = parseFloat(document.getElementById('felgehintenleft').value);
	var rhintentop = parseFloat(document.getElementById('reifenhintentop').value);
	var rhintenleft = parseFloat(document.getElementById('reifenhintenleft').value);
	var bhintenleft = parseFloat(document.getElementById('bremsehintenleft').value);
	
	var fvorneleft = parseFloat(document.getElementById('felgevorneleft').value);
	var rvorneleft = parseFloat(document.getElementById('reifenvorneleft').value);
	var bvorneleft = parseFloat(document.getElementById('bremsevorneleft').value);
	
	var swidth = parseFloat(document.getElementById('spiegelwidth').value);
	var sheight = parseFloat(document.getElementById('spiegelheight').value);
	var stop = parseFloat(document.getElementById('spiegeltop').value);
	var sleft = parseFloat(document.getElementById('spiegelleft').value);
	var ktop = parseFloat(document.getElementById('karrosserietop').value);
	
	//Setze CSS Styles
	document.getElementById('bildfelgedivhinten').style.top = fhintentop + felgehintentop[selected] + "%";
	document.getElementById('bildfelgedivhinten').style.left = fhintenleft + felgehintenleft[selected] + "%";
	document.getElementById('reifendivhinten').style.top = rhintentop + reifenhintentop[selected] + "%";
	document.getElementById('reifendivhinten').style.left = rhintenleft + reifenhintenleft[selected] + "%";
	document.getElementById('bremsedivhinten').style.left = bhintenleft + bremsehintenleft[selected] + "%";
	
	document.getElementById('bildfelgedivvorne').style.left = fvorneleft + felgevorneleft[selected] + "%";
	document.getElementById('reifendivvorne').style.left = rvorneleft + reifenvorneleft[selected] + "%";
	document.getElementById('bremsedivvorne').style.left = bvorneleft + bremsevorneleft[selected] + "%";
	
	document.getElementById('spiegeldiv').style.width = swidth + spiegelwidth[selected] + "%";
	document.getElementById('spiegeldiv').style.height = sheight + spiegelheight[selected] + "%";
	document.getElementById('spiegeldiv').style.left = sleft + spiegelleft[selected] + "%";
	
	//Prüfe Höhe von dem Auto
	var fahrwerkAsString = document.getElementById('fahrwerkregler').value;
	var fahrwerk = parseInt(fahrwerkAsString);
	if(fahrwerk == 1){
		//Tiefer gelegt
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop1[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop1[selected] + "%";
	} else if(fahrwerk == 3){
		//Höher gelegt
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop3[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop3[selected] + "%";
	} else{
		//Normale höhe
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop2[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop2[selected] + "%";
	}
	
	window.load;
}

/* ---------- Fahrwerk einstellen ---------- */
//Funktion verstellt Höhe von dem Auto
function fahrwerk() {
	//Definition der Variablen
	var spiegeltop1 = [6.5,
			    	     2,
			    	     2,
			    	     2.5];
	var spiegeltop2 = [4.5,
		    	     1,
		    	     1,
		    	     1];
	var spiegeltop3 = [4,
			    	     0,
			    	     0,
			    	     0];
	var karrosserietop1 = [3,
			    	     2,
			    	     2,
			    	     2.5];
	var karrosserietop2 = [1,
		    	     1,
		    	     1,
		    	     1];
	var karrosserietop3 = [0.5,
			    	     0,
			    	     0,
			    	     0];
	//Hole Höhe
	var valueAsString = document.getElementById('fahrwerkregler').value;
	var value = parseInt(valueAsString);
	
	//Hole Lackierung
	var selectedAsString = document.getElementById('farbe').value;
	var selected = parseInt(selectedAsString);
	
	//Hole Spiegeldaten
	var spiegel = parseFloat(document.getElementById('spiegeltop').value);
	var karosserie = parseFloat(document.getElementById('karrosserietop').value);
	
	
	if(value == 1){
		//Tiefer legen
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop1[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop1[selected] + "%";
	} else if(value == 3){
		//Höher legen
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop3[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop3[selected] + "%";
	} else{
		//Normale Höhe
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop2[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop2[selected] + "%";
	}
	
	window.load;
}

//Funktion navigiert zu neuer Seite
function bmwClicked() {
	window.location = '/M152_Autokonfigurator/AuswahlBmw.html';
}

//Funktion öffnet Startseite
function startseite() {
	window.location = '/M152_Autokonfigurator/Startseite.html';
}