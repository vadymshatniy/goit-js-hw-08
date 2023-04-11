const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        localStorage.getItem('videoplayer-current-time', currentTime);
    });

    player.getVideoTitle().then(function(currentTime) {
        localStorage.setItem('videoplayer-current-time', currentTime);
    });




    
