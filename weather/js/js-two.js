const day = new Date().getDay();
var month = new Date().getMonth();
const year = new Date().getFullYear();
const date = new Date().getDate();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

month += 1;

console.log(typeof day);
console.log(day);

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

 function fridayAnnouncement () {
    if (day === 5) {
        var dayClass = document.getElementById('announcement');
        if (dayClass.className === 'false') {
            dayClass.className = 'true';
        }
    }
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

function redirect () {
    window.location.href = "thanks.html";
}
