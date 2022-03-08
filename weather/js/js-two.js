const day = new Date().getDay();
var month = new Date().getMonth();
const year = new Date().getFullYear();
const date = new Date().getDate();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

month += 1;



const complteteDate = `${month}/${date}/${year}`;

document.getElementById('current-date').textContent = complteteDate;

function changeClass () {
    var x = document.getElementById("responsive-class");
    if (x.className === 'nav-bar') {
        x.className += '__responsive';
    } else {
        x.className = 'nav-bar';
    }
}

function restoreClass () {
    var windowSize = window.innerWidth;
    if (windowSize > 720) {
        var x = document.getElementById("responsive-class");
        x.className = 'nav-bar';
    }
}