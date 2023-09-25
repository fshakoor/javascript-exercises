const reverseString = function(str) {
    let arr = []
    for (const letters of str) {
        arr.push(letters);
    }
    arr = arr.reverse()
    return arr.join('')
};

// Do not edit below this line
module.exports = reverseString;
