function addNum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(addNum(1)(2));