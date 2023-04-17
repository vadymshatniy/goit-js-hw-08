import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time.seconds));
}, 1000));

const timeOfPlayer = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;

player.setCurrentTime(timeOfPlayer);   





    
