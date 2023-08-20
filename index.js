let urlField = document.getElementById("urlField");
let videoPlayer = document.getElementById("videoPlayer");
let videoID;

urlField.value = "";
videoPlayer.setAttribute("src", "");

function setVideoSource() {
    if (urlField.value.match(/https:\/\/www\.youtube\.com./i)) {
        videoID = urlField.value.split("v=")[1];
        if (videoID.length > 11) {
            videoID = videoID.slice(0, 11);
        }
    } else {
        videoID = urlField.value;
    }
    if (videoID) {
        videoPlayer.setAttribute("src", `https://www.youtube.com/embed/${videoID}`);
    }
}

document.getElementById("playButton").addEventListener("click", setVideoSource);