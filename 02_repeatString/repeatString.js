const repeatString = function(str,int) {
    if (int < 0) {return 'ERROR'};
    let newstr = ''
    for (let i = 0; i < int; i++) {
        newstr += str
    };
    return newstr
};

// Do not edit below this line
module.exports = repeatString;
