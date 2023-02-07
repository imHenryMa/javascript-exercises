const sumAll = function(a, b) {

    //Checks conditions
    if(!isInputValid(a) || !isInputValid(b)){
        return 'ERROR';
    }
    
    //For readibility, setting the low and high limits
    lo = (a < b) ? a : b;
    hi = (a < b) ? b : a;

    //Go through each range and sum
    sum = 0;
    for(let i = lo; i<= hi; i++){
        sum += i;
    }

    //Return the answer
    return sum;
};

function isInputValid(input){
    //return error if non-numeric
    //return error if negative
    return  typeof(input) == typeof(Number()) 
            && input >= 0;
}

// Do not edit below this line
module.exports = sumAll;
