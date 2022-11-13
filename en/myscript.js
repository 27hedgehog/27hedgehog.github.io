var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');
var download = document.getElementById('downloadButton');
var eng = document.getElementById('englishButton');
var ru = document.getElementById('russianButton');



var lang;
if (typeof navigator.userLanguage != 'undefined')
{lang =navigator.userLanguage.toUpperCase }
else
if (typeof navigator.language != 'undefined')
{lang =navigator.language.toUpperCase }

if (lang=='ru') {location.href="/ru/index.html"} else {location.href="index.html"}


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
    download("resume.pdf", "resume.pdf", "pdf");
}

eng.onclick = function() {
    document.location='index.html'
}



//document.ru.addEventListener('click', () => window.open('https://27hedgehog.github.io/ru/index.html'));
