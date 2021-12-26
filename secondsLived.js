let now = new Date();
let currentYear = now.getFullYear();
let currentMonth = now.getMonth();
let currentDay = now.getDate();

let userYear;
let userMonth;
let userDay;

function getUserInput(){ 
    userYear = document.getElementById('userYear');
    userMonth = document.getElementById('userMonth');
    userDay = document.getElementById('userDay');

    getResult();
}

document.getElementById("calculate").addEventListener('click', getUserInput)

function getResult(){
    let resultYear = (currentYear - userYear.value) * (365*24*3600);
    let resultMonth = (currentMonth - userMonth.value) * (30*86400);
    let resultDay = (currentDay - userDay.value) * (3600*24);

    let totalSeconds = resultYear + resultMonth + resultDay;

    console.log(totalSeconds);
    document.getElementById("Output").innerHTML = "Seconds: " + totalSeconds.toLocaleString("en-US");
}






 