const leapYears = function (year) {
    let leapChecked;
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        leapChecked = true;
    } else {
        leapChecked = false;
    }
    return leapChecked;
};

// Do not edit below this line
module.exports = leapYears;
