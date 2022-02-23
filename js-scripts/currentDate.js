/* get the current day*/
const day = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const date = new Date().getDate();

const listDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const listMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDay = listDays[day];
const currentMonth = listMonths[month];

const complteteDate = `${currentDay}/${currentMonth}/${date}/${year}`;

document.getElementById('current-date').textContent = complteteDate;