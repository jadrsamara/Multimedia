
var movie = sessionStorage.getItem("movie");
document.getElementById('title').innerHTML = movie;
document.getElementById('ttl').innerHTML = movie;
document.getElementById('vid').src = "https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + movie + "/dash/video-manifest.mpd";

var p = document.createElement("p");
fetch("https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + movie + "/description.txt")
    .then(r => r.text())
    .then(t => {
        if (t.includes("class=\"meta\"")) {
            p.innerHTML = t;
        } else {
            p.innerHTML = "<br><p>No description.</p><br>";
        }
    });
document.getElementById("des").appendChild(p);

const video = document.querySelector('video');

video.addEventListener('playing', (event) => {
    // console.log('Video is no longer paused');
});

video.addEventListener('pause', (event) => {
    // console.log('Video is paused');
    document.getElementById('black').style.visibility = "visible";
    document.getElementById('back').style.visibility = "visible";
});

function hide() {
    document.getElementById('black').style.visibility = "hidden";
    document.getElementById('back').style.visibility = "hidden";
    video.play();
}
