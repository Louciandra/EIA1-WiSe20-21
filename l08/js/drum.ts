var isplaying = false;
var beatplayInt;
var playerInt;
var beatArr = ["kick","snare","kick","snare","kick","snare","hihat","hihat"];
var recording = false;

window.onload=function(){
    document.querySelector("#hihat").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#kick").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#snare").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#A").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#C").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#F").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#G").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#laugh-1").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#laugh-2").addEventListener("click", function(): void {
        playSample(this.id);
        recordBeat(this.id);
    });
    document.querySelector("#playstop").addEventListener("click", function(): void {
        playBeat(this);
        recording=false;
    });
    document.querySelector("#delete").addEventListener("click", function(): void {
        deleteBeat();
        recording=false;
    });
    document.querySelector("#record").addEventListener("click", function(): void {
        recording = !recording;
    });
    document.addEventListener('keypress', distribute);
};

function playSample(id:string){
    var sound:HTMLAudioElement = new Audio("sounds/"+id+'.mp3');
    sound.play();
}

function playBeat(button){
    var interval = 300;
    if(!isplaying && beatArr.length > 0){
        isplaying = true;
        button.className = "fas fa-stop";
        beatplayInt = setInterval(function(){
            var i = 0;
            playerInt = setInterval(function(){
                playSample(beatArr[i]);
                i++;
            }, interval);
        }, interval*beatArr.length);
    } else {
        isplaying = false;
        button.className = "fas fa-play";
        clearInterval(beatplayInt);
        clearInterval(playerInt);
    }
    
}

function deleteBeat(){
    beatArr = [];
}

function recordBeat(sample){
    if(recording){
        beatArr.push(sample);
    }
}

function distribute(key){
    var drumpads = ["G","laugh-1", "laugh-2","A","C","F","hihat","kick","snare"];
    switch(key.code){
        case "Space":{
            var button = document.querySelector("#playstop");
            playBeat(button);
            recording=false;
            break;
        }
        case "KeyR": {
            recording = !recording;
            break;
        }
        
        case "KeyD": {
            deleteBeat();
            recording=false;
            break;
        }
    }

    if (key.keyCode >= 49 && key.keyCode <= 57){
        playSample(drumpads[key.keyCode-49]);
        recordBeat(drumpads[key.keyCode-49]);
    }
}