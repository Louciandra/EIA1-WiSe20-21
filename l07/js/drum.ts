function playSample(id:string){
    var sound:HTMLAudioElement = new Audio("sounds/"+id+'.mp3');
    sound.play();
}

function playBeat(){
    var beat = ["kick","snare","kick","snare","kick","snare","hihat","hihat"];
    var i = 0;
    var interval = 300;
    setInterval(function(){
        playSample(beat[i]);
        i++;
    }, interval);
}
