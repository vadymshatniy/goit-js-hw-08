const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){localStorage.getItem("videoplayer-current-time",currentTime)})),t.getVideoTitle().then((function(e){localStorage.setItem("videoplayer-current-time",e)}));
//# sourceMappingURL=02-video.eddc8eae.js.map
