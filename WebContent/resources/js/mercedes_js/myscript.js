/*
 * Autor: Leandro Silva
 * Datum: 26.10.2017
 */


/* ---------- Felgen Auswahl ---------- */
function next() {
	var verzeichnis = "/M152_Autokonfigurator/resources/images/original_images/mercedes/";
		var bilder = ["felge_1.png",
		              "felge_2.png",
		              "felge_3.png",
		              "felge_4.png",
		              "felge_5.png"];
	var zaehlerAsString = document.getElementById('zaehler').value;
	var zaehler = parseInt(zaehlerAsString);
	zaehler = zaehler + 1;
	if(zaehler >= bilder.length){
		zaehler = 0;
	}
	var bild = bilder[zaehler];
	document.getElementById('zaehler').value = zaehler;
	
	document.getElementById('felgevorschau').src = verzeichnis + bild;
	document.getElementById('bildfelgevorne').src = verzeichnis + bild;
	document.getElementById('bildfelgehinten').src = verzeichnis + bild;
	
	
	window.load;
}

function ruckgang() {
	var verzeichnis = "/M152_Autokonfigurator/resources/images/original_images/mercedes/";
	var bilder = ["felge_1.png",
	              "felge_2.png",
	              "felge_3.png",
	              "felge_4.png",
	              "felge_5.png"];
		var zaehlerAsString = document.getElementById('zaehler').value;
		var zaehler = parseInt(zaehlerAsString);
		zaehler = zaehler - 1;
		if(zaehler < 0){
			zaehler = bilder.length - 1;
		}
		var bild = bilder[zaehler];
		document.getElementById('zaehler').value = zaehler;
		
		document.getElementById('felgevorschau').src = verzeichnis + bild;
		document.getElementById('bildfelgevorne').src = verzeichnis + bild;
		document.getElementById('bildfelgehinten').src = verzeichnis + bild;
		
		window.load;
}

/* ---------- Auspuff Auswahl ---------- */
function auspuff(){
	var verzeichnis = "/M152_Autokonfigurator/resources/audio/bmw_audio/";
	var audios = ["e92remus.mp3",
		              "e92eisenmann.mp3",
		              "e92akrapovic.mp3"];
	var infos = ["Remus",
		         "Eisenmann",
		         "Akrapovic"];
	var selectedAsString = document.getElementById('auspuff').value;
	var selected = parseInt(selectedAsString);
	var audio = audios[selected];
	var info = infos[selected];
	
	document.getElementById('soundName').innerHTML = info;
	document.getElementById('soundcheck').src = verzeichnis + audio;
	
	window.load;
}

/* ---------- Lackierung Auswahl ---------- */
function lackierung(){
	var verzeichnis = "/M152_Autokonfigurator/resources/images/mercedes_images/";
	var bilder = ["s63_grau.png",
	              "s63_schwarz.png",
	              "s63_weiss.png"];
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
	var selectedAsString = document.getElementById('farbe').value;
	var selected = parseInt(selectedAsString);
	var bild = bilder[selected];
	
	document.getElementById('karosserie').src = verzeichnis + bild;
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
	
	var fahrwerkAsString = document.getElementById('fahrwerkregler').value;
	var fahrwerk = parseInt(fahrwerkAsString);
	if(fahrwerk == 1){
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop1[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop1[selected] + "%";
	} else if(fahrwerk == 3){
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop3[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop3[selected] + "%";
	} else{
		document.getElementById('spiegeldiv').style.top = stop + spiegeltop2[selected] + "%";
		document.getElementById('karosseriediv').style.top = ktop + karrosserietop2[selected] + "%";
	}
	
	window.load;
}

/* ---------- Fahrwerk einstellen ---------- */

function fahrwerk() {
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
	var valueAsString = document.getElementById('fahrwerkregler').value;
	var value = parseInt(valueAsString);
	
	var selectedAsString = document.getElementById('farbe').value;
	var selected = parseInt(selectedAsString);
	
	var spiegel = parseFloat(document.getElementById('spiegeltop').value);
	var karosserie = parseFloat(document.getElementById('karrosserietop').value);
	
	
	if(value == 1){
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop1[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop1[selected] + "%";
	} else if(value == 3){
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop3[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop3[selected] + "%";
	} else{
		document.getElementById('spiegeldiv').style.top = spiegel + spiegeltop2[selected] + "%";
		document.getElementById('karosseriediv').style.top = karosserie + karrosserietop2[selected] + "%";
	}
	
	window.load;
}