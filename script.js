function changeBackgroundColor(BackgroundColorButton) {
    document.body.style.backgroundColor = "lightblue";
}

<button onclick="changeBackgroundColor()">Change Background Color</button>
          

function playBackgroundMusic() {
    var audio = new Audio('jazz-lounge-elevator-music-332339.mp3');
    audio.loop = true;
    audio.play();
        }
        // Modify your window.onload function
        window.onload = function() {
            playBackgroundMusic();
};
