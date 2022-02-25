/* get the current day*/
const day = new Date().getDay();
var month = new Date().getMonth();
const year = new Date().getFullYear();
const date = new Date().getDate();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

month += 1;



const complteteDate = `Last Update: ${month}/${date}/${year} ${hour}:${minute}:${second}`;

document.getElementById('current-date').textContent = complteteDate;