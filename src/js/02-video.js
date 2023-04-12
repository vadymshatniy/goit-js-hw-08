var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (time) {
    throttle(localStorage.setItem('videoplayer-current-time', JSON.stringify(time)), 1000);
});


const timeOfPlayer = localStorage.getItem("videoplayer-current-time");
const timeOfPlayerParsed = JSON.parse(timeOfPlayer);

player.setCurrentTime(timeOfPlayerParsed.seconds);   


console.log(throttle);


    
