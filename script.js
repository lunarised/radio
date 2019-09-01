window.onload = function () {
	var getJSON = function(url, callback) {
		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', url, true);
		    xhr.responseType = 'json';
		    xhr.onload = function() {
			          var status = xhr.status;
			          if (status === 200) {
					          callback(null, xhr.response);
					        } else {
							        callback(status, xhr.response);						      }
			        };
		    xhr.send();
	};
	function vCF(){
		var vol = this.value / 100;
		audio.volume = vol;
	}
	function cCF() {
		source.src = "http://nz.lunarised.com:8000/"+this.value+".ogg";
		switch (this.value){
			case "ape":
				channelint = 0;
			break;
			case "beat":
				channelint = 1;
			break
		}
		audio.load();
		audio.play();
		jscrape();
	}
	function mPlay(){
	//	alert("Goo");
		audio.play();
	jscrape();
	}
	window.setInterval(function(){
		  jscrape();
		}, 5000);
function jscrape(){	
	getJSON('http://nz.lunarised.com:8000/status-json.xsl',
	function(err, data) {
		  if (err !== null) {
      alert('Something went wrong: ' + err + 'you should let lunarised know!');
    } else {
        titele.innerHTML ="Title: "+ data.icestats.source[channelint].title;
	titele.innerHTML += "<br>Artist: " + data.icestats.source[channelint].artist;
     titele.innerHTML += "<br> Listeners: " + data.icestats.source[channelint].listeners;
    
    }
		});
	}	
	var channelint = 0;;
	var selectBox = document.getElementById("selection");
	var audio = document.getElementById('audio');
	var butt = document.getElementById('playButton');
	var titele = document.getElementById('Stitle');
	audio.load();
	var source = document.getElementById('audioSource'); 
	var volSlide = document.getElementById("volSlide");
	volSlide.addEventListener('change', vCF);
	selectBox.addEventListener('change', cCF);
	butt.addEventListener('click', mPlay);
	audio.play();
	jscrape();
}
