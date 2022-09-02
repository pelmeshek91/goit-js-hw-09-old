import Player from '@vimeo/player';
import * as throttle from 'lodash.throttle';
const player = new Player(document.querySelector('iframe'));
function getCurrentTime() {
  player.on(
    'timeupdate',
    throttle(function ({ seconds }) {
      localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    }, 1000)
  );

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
}
