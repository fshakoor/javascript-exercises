const fibonacci = function(n) {
    if (n<0) {return "OOPS"}
    let fib = [1, 1, 2, 3, 5, 8]
    if (fib[n+1] == undefined) {
      while (fib.length < n) {
        fib.push(fib[fib.length-1]+fib[fib.length-2])
      }
    }
    return fib[n-1]
  };

// Do not edit below this line
module.exports = fibonacci;
