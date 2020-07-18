window.onload = function () {
	let getJSON = function(url, callback) {
		    const xhr = new XMLHttpRequest();
		    xhr.open('GET', url, true);
		    xhr.responseType = 'json';
		    xhr.onload = function() {
			          let status = xhr.status;
			          if (status === 200) {
					          callback(null, xhr.response);
					        } else {
							        callback(status, xhr.response);						      }
			        };
		    xhr.send();
	};
	function vCF(){
		let vol = this.value / 100;
		audio.volume = vol;
	}
	function cCF() {
		source.src = "http://lunarised.com:8000/"+this.value+".ogg";
		switch (this.value){
			case "myOriginals":
				channelint = 0;
			break;
			case "ranch":
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
	getJSON('http://lunarised.com:8000/status-json.xsl',
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
	let channelint = 0;;
	const selectBox = document.getElementById("selection");
	const audio = document.getElementById('audio');
	const butt = document.getElementById('playButton');
	const titele = document.getElementById('Stitle');
	audio.load();
	const source = document.getElementById('audioSource'); 
	const volSlide = document.getElementById("volSlide");
	volSlide.addEventListener('change', vCF);
	selectBox.addEventListener('change', cCF);
	butt.addEventListener('click', mPlay);
	audio.play();
	jscrape();
}
