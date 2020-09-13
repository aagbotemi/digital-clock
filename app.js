//selecting the DOM
const greetElement = document.getElementById('greeting');
const dateElement = document.getElementById('date');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');
const meridiesElement = document.getElementById('meridies');

const digitalClock = () => {
    const now = new Date(); //date constructor

    //get the hour, minute and second
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let timeOfDay; //set time of the day

    // ticking of the time when it's below 10
    hour = Ticking(hour);
    minute = Ticking(minute);
    second = Ticking(second);

    //conditional for timeOfDay
    if (hour < 12) {
        timeOfDay = 'morning <i class="fas fa-cloud-sun"></i>';
        meridiesElement.innerHTML = 'AM';
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = 'afternoon <i class="fas fa-sun"></i>';
        meridiesElement.innerHTML = 'PM';
    } else if (hour >= 17 && hour < 20) {
        timeOfDay = 'evening <i class="fas fa-cloud-moon"></i>';
        meridiesElement.innerHTML = 'PM';
    } else {
        timeOfDay = 'night <i class="fas fa-moon"></i>';
        meridiesElement.innerHTML = 'PM';
    }

    //append timeOfDay into the HTML
    greetElement.innerHTML = `Good ${timeOfDay}`;

    // day of the month, weekday and month
    const option = { weekday: "long", month: "short", day: "numeric" };
    dateElement.innerHTML = now.toLocaleString('en-US', option);

    // append hour, minute and second into the HTML
    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;
}

digitalClock();
setInterval(digitalClock, 1000);

function Ticking(ticVal) {
    if (ticVal < 10) {
        ticVal = "0" + ticVal;
    }
    return ticVal;
}