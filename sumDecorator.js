function spy(sumFunc) {
    const allArgs = []
    return (...args) => {
        allArgs.push([...args]);
        console.log(allArgs);
        return sumFunc(...args);
    }
}

function sum(a, b) { 
    return a + b
}

wrapper = spy(sum)

console.log(wrapper(1, 2))
console.log(wrapper(7, 2))
console.log(wrapper(1, 9))
