import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
    console.log(throttle); 
}, 1000));


const timeOfPlayer = localStorage.getItem("videoplayer-current-time");
const timeOfPlayerParsed = JSON.parse(timeOfPlayer);

player.setCurrentTime(timeOfPlayerParsed.seconds);   





    
