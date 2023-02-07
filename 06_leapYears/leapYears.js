const leapYears = function(year) {
    //Leap years are years divisible by four (like 1984 and 2004).
    //However, years divisible by 100 are not leap years
    //unless divisible by 400

    condition  = !(year%4); 
    condition &= !!(year%100) || !(year%400); //If divisible by 100, then false UNLESS divisible by 400
    
    return !!condition;
};

// Do not edit below this line
module.exports = leapYears;
