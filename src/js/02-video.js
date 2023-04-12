const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
const video = document.getElementById("vimeo-player");


    player.on('play', function() {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(video.currentTime));
        console.log(JSON.stringify(video.currentTime));
    });

    player.getVideoTitle().then(function(currentTime) {
        localStorage.getItem('videoplayer-current-time');
    });




    
