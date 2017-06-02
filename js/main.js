var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

$(document).ready(function() {
	
recognition.lang = 'es-ES';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();
	
recognition.onresult = function(event) {
	
	var dicho = event.results[0][0].transcript;
	
		if(dicho.indexOf("macri") != -1){
			document.getElementById("audio-miau").play(); 
			
		}

};
	
recognition.onend = function(event) {
		recognition.start();
};

});