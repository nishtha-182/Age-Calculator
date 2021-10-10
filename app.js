//variables for date picker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// variables for printing

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change', function () {

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-us', options);

    console.log("DOB IS : " + DOB);
    choseDate.innerHTML = "DOB : " + " " + DOB;

    var MiliSecondsDOB = Date.parse(DOB);
    var MiliSecondsNow = Date.now();

    var age_in_mili = MiliSecondsNow - MiliSecondsDOB;
    //console.log(age_in_mili);

    var MiliSeconds = age_in_mili;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    //Start of a calculation

    var years = Math.round(MiliSeconds / year);
    var months = years * 12;
    var days = years * 365;
    var hours = Math.round(MiliSeconds / hour);
    var seconds = Math.round(MiliSeconds / second);

    //Now To print the values

    ageYear.innerHTML = years
    ageMonth.innerHTML = months
    ageDays.innerHTML = days
    ageHours.innerHTML = hours
    ageSeconds.innerHTML = seconds
    ageMiliSeconds.innerHTML = MiliSeconds;

    document.querySelector('.age-calc').classList.add('expand');

})