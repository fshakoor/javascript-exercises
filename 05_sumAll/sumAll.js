const sumAll = function(int1,int2) {
    if (int1 < 0 || int2 < 0) {return 'ERROR'}
    if (typeof(int1) != "number" || typeof(int2) != "number") {return 'ERROR'}
    sum = 0;
    if (int1 < int2) {
        for (i = int1; i < int2+1; i++) {
            sum += i;
        }
    } else {
        for (i = int1; i > int2-1; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
