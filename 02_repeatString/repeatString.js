const repeatString = function(stringInput, numRepeat) {
    if(numRepeat < 0) return 'ERROR';
    
    let output ='';
    for(let i = 0; i < numRepeat; i++){
        output += stringInput;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
