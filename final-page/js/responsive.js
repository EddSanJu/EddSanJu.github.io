function changeClass () {
    var x = document.getElementById("responsive-nav");
    if (x.className === 'nav-bar__') {
        x.className += 'active';
    } else {
        x.className = 'nav-bar__';
    }
}