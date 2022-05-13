function maxWithObj(string) {
    let newStr = string.toLowerCase();
    const letters = {};
    let max = ['', 0];
    
    for (let i = 0; i < newStr.length; ++i) {
        if (!letters.hasOwnProperty(newStr[i])) {
            letters[newStr[i]] = 1; 
        } else {
            letters[newStr[i]] += 1; 
        }

        if (max[1] < letters[newStr[i]]) {
            max[0] = newStr[i];
            max[1] = letters[newStr[i]];
        }
    }
    return max;
}

console.log(maxWithObj("aaaaaaaaaaaaaz"));