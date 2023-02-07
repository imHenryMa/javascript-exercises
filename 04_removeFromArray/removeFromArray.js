const removeFromArray = function(array, ...args) {

    const newArray = [];
    //For me:
        //Use the shift() operator to remove first item of array -> use it to populate another array? or just make a second array that populates
        //arguments <--- is a variable inside a function that contains all the arguments

    //Loop through each item in the array
    for(const item of array){
        let argFound = false;
        //Loop through the args. If the item matches the arg, then do not add to the array
        for(const arg of args){
            if(arg === item){
                argFound = true;
                break;
            }
        }

        //If the argument was not found, then append to the new array
        if(!argFound){
            newArray.push(item);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
