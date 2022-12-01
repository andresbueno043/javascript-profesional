
const video = document.querySelector('video');
const button = document.querySelector('button');

class MediaPlayer {
  constructor(config){
    this.config = config;
    this.media = config.el;
  };

  play(){
    this.media.play();
  };

  pause(){
    this.media.pause();
  };
};

const player = new MediaPlayer({ el: video});
button.onclick = () => video.paused ? player.play() : player.pause();
