!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),r=document.getElementById("vimeo-player");t.on("play",(function(){localStorage.setItem("videoplayer-current-time",JSON.stringify(r.currentTime)),console.log(JSON.stringify(r.currentTime))})),t.getVideoTitle().then((function(e){localStorage.getItem("videoplayer-current-time")}))}();
//# sourceMappingURL=02-video.67774940.js.map
