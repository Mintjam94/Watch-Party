let urlField = document.getElementById("urlField");
urlField.value = "";
let videoPlayer = document.getElementById("videoPlayer");
videoPlayer.setAttribute("src", "");
let vidID;

function handleVidID() {
    if (urlField.value.match(/(https:\/\/www\.youtube\.com)./i)) {
        for (let i = 0; i < urlField.value.length; i++) {
            if (urlField.value[i] === "v" && urlField.value[i + 1] === "=") {
                vidID = urlField.value.slice(i + 2, i + 13);
                break;
            }
        }
    } else {
        vidID = urlField.value;
    }
    console.log(vidID)
    if (vidID) {
        videoPlayer.setAttribute("src", `https://www.youtube.com/embed/${vidID}`);
    }
}

document.getElementById("playButton").addEventListener("click", handleVidID);