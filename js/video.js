var video;

video = document.querySelector("#player1");
video.load();
video.autoplay = false;
video.loop = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
});

let speed = 1;

document.querySelector("#slower").addEventListener("click", function() {
    speed = speed * 9/10;
    console.log(`current speed is ${speed}`)
    if(speed < 0.5){
        window.alert("Video is at slowest speed!");
        return false;
    }
    else{
        video.playbackRate = speed;
    }
});

document.querySelector("#faster").addEventListener("click", function() {
    speed = speed * 10/9;
    console.log(`current speed is ${speed}`)
    if(speed > 2){
        window.alert("Video is at fastest speed!");
        return false;
    }
    else{
        video.playbackRate = speed;
    }
});

let current = 0;

document.querySelector("#skip").addEventListener("click", function() {
    current = video.currentTime + 10;
    console.log(`current location is ${current}`)
    if(current > video.duration)
    {
        current = 0;
    }
    video.currentTime = current;
});

let ismute = false;

document.querySelector("#mute").addEventListener("click", function() {
    if(ismute == false)
    {
        video.muted = true;
        ismute = true;
        document.getElementById('mute').innerHTML = 'Unmute';
    }
    else{
        video.muted = false;
        ismute = false;
        document.getElementById('mute').innerHTML = 'Mute';
    }
});

let slider = document.querySelector("#slider");
let output = document.querySelector("#volume");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    video.volume = slider.value / 100;
}

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});