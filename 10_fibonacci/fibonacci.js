const fibonacci = function(n,fibn = [0,1]) {
    if(Number(n) < 0) return 'OOPS';

    //Using an array to keep track of calculations that we have
    //Done already -> Cuts the time with larger fib numbers
    if(!(n in fibn)){
        fibn[n] = fibonacci(n-2,fibn)+fibonacci(n-1,fibn);
    }
    
    return fibn[n];
};

// Do not edit below this line
module.exports = fibonacci;
