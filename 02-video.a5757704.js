const e=document.querySelector("iframe"),t=new Vimeo.Player(e),o=document.getElementById("vimeo-player");t.on("play",(function(){localStorage.setItem("videoplayer-current-time",JSON.stringify(o.currentTime)),console.log(JSON.stringify(o.currentTime))})),t.getVideoTitle().then((function(e){localStorage.getItem("videoplayer-current-time")}));
//# sourceMappingURL=02-video.a5757704.js.map
