function togglePlayPause(videoId) {
    var video = document.getElementById(videoId);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}