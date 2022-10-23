var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');
var download = document.getElementById('downloadButton');

function opacity() {
    content.style.opacity = 1;
}

function none() {
    modal.style.display = "none";
}

button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity, 100);
}

close.onclick = function() {
    content.style.opacity = 0;
    setTimeout(none, 1000);
}

download.onclick = function() {
    download("resume.pdf", "resume_eng.pdf", "pdf");
}

