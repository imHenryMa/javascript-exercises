const reverseString = function(inputString) {
    output = ''
    for(let i = inputString.length-1; i>=0; i--){
        output += inputString[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
