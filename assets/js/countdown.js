let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date('April 21, 2023 00:00:00');
let endTime = endDate.getTime();

// console.log(endTime);
function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;


    let addZeroes = (num) => (num < 10 ? `0${num}`:num);

    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").
        innerHTML = `<h1>Countdown Has Expired!` 
    }
    else{
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minslEFT = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minslEFT);
        secBox.textContent = addZeroes(secsLeft);
        
    }
}

let i = setInterval(countdown, 1000);
countdown();