class AutoPlay{
    constructor(config){
        this.config = config || null;
    }

    run(player){
        player.mute();
        player.play();
    }
}

export default AutoPlay;