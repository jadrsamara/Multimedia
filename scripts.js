var files = [];

function loadDoc() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     myFunction(this);
    //   }
    // };
    // xhttp.open("GET", "https://api.github.com/repos/jadrsamara/Multimedia/contents/media/", true);
    // xhttp.send();

    files = ['Nobody', 'PeakyBlinders', 'Tenet', 'Godfather', 'Interstellar', 'Moneyball', 'Vikings'];
    load();
}

function myFunction(xml) {

    console.log(xml.responseText);

    // response = JSON.parse(xml.responseText);

    // response.forEach(element => {
    //   files.push(element.name);
    // });

    load();
}

loadDoc();

function addDiv(name) {
    var node = document.createElement("div");
    node.className = "video";

    node.addEventListener("mouseover", function () {
        chbg(name);
    }, false);

    node.addEventListener("mouseout", function () {
        chbg_out();
    }, false);

    var a = document.createElement("a");
    a.addEventListener("click", function () {
        myHandler(name);
    }, false);
    a.id = name;
    a.href = "/Multimedia/video.html";

    var img = document.createElement("img");
    img.className = "imgg";
    img.src = "https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + name + "/" + name + ".jpg";

    var div = document.createElement("div");
    div.className = "box";

    var h2 = document.createElement("h2");
    h2.innerHTML = name;
    div.appendChild(h2);

    var p = document.createElement("p");
    fetch("https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + name + "/description.txt")
        .then(r => r.text())
        .then(t => {
            if (t.includes("class=\"meta\"")) {
                p.innerHTML = t;
            } else {
                p.innerHTML = "<p>­</p><p>No description.</p><p>­</p>";
            }
        });

    div.appendChild(p);

    node.appendChild(a);
    a.appendChild(img);
    a.appendChild(div);

    const container = document.getElementById("container");
    container.appendChild(node);
}

function load() {
    for (i = 0; i < files.length; i++) {
        addDiv(files[i]);
    }
}


// ***************************************************************************************
// loadfile('PeakyBlinders/description.txt');

function loadfile(path) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionFile(this);
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + path, true);
    xhttp.send();
}

function myFunctionFile(xml) {

    console.log(xml.responseText);

}

var movie = "null";
// your handler
function myHandler(e) {
    movie = e;
    sessionStorage.setItem("movie", movie);
}

function chbg(background) {
    document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/jadrsamara/Multimedia/main/media/" + background + "/" + background + ".jpg" + ")";

    $(".video").hover(function () {
        $(this).css("background-color", "rgba(29, 29, 29, 0.507)")
    });

    $(".video").mouseover(function () {
        $(this).css("background-color", "rgb(0, 0, 0, 0.75)")
    });
}

function chbg_out() {
    document.body.style.backgroundImage = 'url(https://raw.githubusercontent.com/jadrsamara/Multimedia/main/color.PNG)';
}
