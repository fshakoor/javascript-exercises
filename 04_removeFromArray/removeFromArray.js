const removeFromArray = function(arr,...toremove) {
    let args = [...toremove]
    for (const i of args) {
        let index = arr.indexOf(i);
        if (index >= 0) {arr.splice(index,1)}
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
