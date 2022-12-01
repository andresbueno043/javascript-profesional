class MediaPlayer {
  constructor(config){
    this.config = config;
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  };

  _initPlugins(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    })
  }

  play(){
    this.media.play();
  };

  pause(){
    this.media.pause();
  };

  mute(){
    this.media.muted = true;
  }
};

export default MediaPlayer;
