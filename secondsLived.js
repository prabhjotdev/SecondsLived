const secondsInMinutes = 60,
      minutesInHour = 60,
      hoursInDay = 24,
      daysInYear = 365.24;

let seconds, userAge;

function getUserInput(){ 
    userAge = document.getElementById('userAge');
    getResult();
}

document.getElementById("calculate").addEventListener('click', getUserInput)

function getResult(){
    
    seconds = userAge.value * secondsInMinutes * minutesInHour * hoursInDay * daysInYear;

    document.getElementById("Output").innerHTML = "Seconds: " + seconds.toLocaleString("en-US");
}






 