/*
	Autor:		Leandro Silva
	Datum:		02.11.2017
	Programm:	Autokonfigurator
	
	Beschreibung: 	Das ist ein Javascript, welches für den Mercedes Konfigurator verwendet wird.
 */


/* ---------- Felgen Auswahl ---------- */
//Methode wechselt zu nächster Felge
function next() {
	//Definition der Variablen
	var verzeichnis = "/M152_Autokonfigurator/resources/images/original_images/mercedes/";
	var bilder = ["felge_1.png",
		              "felge_2.png",
		              "felge_3.png",
		              "felge_4.png",
		              "felge_5.png"];
	
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
	var verzeichnis = "/M152_Autokonfigurator/resources/images/original_images/mercedes/";
	var bilder = ["felge_1.png",
	              "felge_2.png",
	              "felge_3.png",
	              "felge_4.png",
	              "felge_5.png"];
	
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
	var verzeichnis = "/M152_Autokonfigurator/resources/audio/mercedes_audio/";
	var audios = ["merc_remus",
		              "merc_original",
		              "merc_akrapovic"];
	var infos = ["Remus",
		         "Original",
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
	var verzeichnis = "/M152_Autokonfigurator/resources/images/mercedes_images/";
	var bilder = ["s63_grau.png",
	              "s63_schwarz.png",
	              "s63_weiss.png"];
	var felgehintentop = [1,
	              0,
	              0];
	var felgehintenleft = [0,
	    	              2.5,
	    	              1.5];
	var reifenhintentop = [1.3,
	    	              0,
	    	              0];
	var reifenhintenleft = [0,
		    	              2.5,
		    	              1.5];
	var bremsehintenleft = [0,
		    	            2.5,
		    	             1.5];
	var bremsehintentop = [1.3,
		    	            0,
		    	             0];
	var felgevorneleft = [0,
		    	          0.3,
		    	          2.3];
	var reifenvorneleft = [0,
		    	           0.2,
		    	           2.2];
	var bremsevorneleft = [0,
		    	           0.5,
		    	           2.5];
	var karrosseriewidth = [0,
		    	        5,
		    	        5];
	var karrosserieheight = [0,
		    	         35,
		    	         30];
	var karrosserieleft = [2.5,
			    	     2,
			    	     0];
	var karrosserietop1 = [20.3,
			    	     4.3,
			    	     2.3];
	var karrosserietop2 = [19,
				    	     3,
				    	     1];
	var karrosserietop3 = [18,
				    	     2,
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
	var bhintentop = parseFloat(document.getElementById('bremsehintentop').value);
	
	var fvorneleft = parseFloat(document.getElementById('felgevorneleft').value);
	var rvorneleft = parseFloat(document.getElementById('reifenvorneleft').value);
	var bvorneleft = parseFloat(document.getElementById('bremsevorneleft').value);
	
	var kwidth = parseFloat(document.getElementById('karrosseriewidth').value);
	var kheight = parseFloat(document.getElementById('karrosserieheight').value);
	var kleft = parseFloat(document.getElementById('karrosserieleft').value);
	var ktop = parseFloat(document.getElementById('karrosserietop').value);
	
	//Setze CSS Styles
	document.getElementById('bildfelgedivhinten').style.top = fhintentop + felgehintentop[selected] + "%";
	document.getElementById('bildfelgedivhinten').style.left = fhintenleft + felgehintenleft[selected] + "%";
	document.getElementById('reifendivhinten').style.top = rhintentop + reifenhintentop[selected] + "%";
	document.getElementById('reifendivhinten').style.left = rhintenleft + reifenhintenleft[selected] + "%";
	document.getElementById('bremsedivhinten').style.left = bhintenleft + bremsehintenleft[selected] + "%";
	document.getElementById('bremsedivhinten').style.top = bhintentop + bremsehintentop[selected] + "%";
	
	document.getElementById('bildfelgedivvorne').style.left = fvorneleft + felgevorneleft[selected] + "%";
	document.getElementById('reifendivvorne').style.left = rvorneleft + reifenvorneleft[selected] + "%";
	document.getElementById('bremsedivvorne').style.left = bvorneleft + bremsevorneleft[selected] + "%";
	
	document.getElementById('karosseriediv').style.width = kwidth + karrosseriewidth[selected] + "%";
	document.getElementById('karosseriediv').style.height = kheight + karrosserieheight[selected] + "%";
	document.getElementById('karosseriediv').style.left = kleft + karrosserieleft[selected] + "%";
	
	//Prüfe Höhe von dem Auto
	var fahrwerkAsString = document.getElementById('fahrwerkregler').value;
	var fahrwerk = parseInt(fahrwerkAsString);
	if(fahrwerk == 1){
		//Tiefer gelegt
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop1[selected] + "%";
	} else if(fahrwerk == 3){
		//Höher gelegt
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop3[selected] + "%";
	} else{
		//Normale höhe
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop2[selected] + "%";
	}
	
	window.load;
}

/* ---------- Fahrwerk einstellen ---------- */
//Funktion verstellt Höhe von dem Auto
function fahrwerk() {
	//Definition der Variablen
	var karrosserietop1 = [20.3,
				    	     4.3,
				    	     2.3];
	var karrosserietop2 = [19,
					    	     3,
					    	     1];
	var karrosserietop3 = [18,
					    	     2,
					    	     0];
	
	//Hole Höhe
	var valueAsString = document.getElementById('fahrwerkregler').value;
	var value = parseInt(valueAsString);
	
	//Hole Lackierung
	var selectedAsString = document.getElementById('farbe').value;
	var selected = parseInt(selectedAsString);
	
	//Hole Spiegeldaten
	var karosserie = parseFloat(document.getElementById('karrosserietop').value);
	
	
	if(value == 1){
		//Tiefer legen
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop1[selected] + "%";
	} else if(value == 3){
		//Höher legen
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop3[selected] + "%";
	} else{
		//Normale Höhe
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop2[selected] + "%";
	}
	
	window.load;
}

//Funktion navigiert zu neuer Seite
function mercClicked() {
	window.location = '/M152_Autokonfigurator/AuswahlMercedes.html';
}

//Funktion öffnet Startseite
function startseite() {
	window.location = '/M152_Autokonfigurator/Startseite.html';
}