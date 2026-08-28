function loadVideo() {
    const url = document.getElementById('urlInput').value;
    const videoId = extractVideoId(url);
    const iframe = document.getElementById('videoPlayer');

    if (videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        alert("Invalid YouTube URL");
    }
}

function extractVideoId(url) {
    let match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}
