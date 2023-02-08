const palindromes = function (string) {


    //Remove punctuation
    string = string.toLowerCase().replace('^[^a-zA-Z0-9]+$','');

    for(let i = 0; i<Math.floor(string.length/2); i++){
        if(!(string[i] === string[string.length-i-1])) 
        return false;
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
