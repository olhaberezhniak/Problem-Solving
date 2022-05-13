// const obj = {
//     prop: "Olya",
//     set p(value) {
//         this.prop = value;
//     }
// }

// console.log(obj.prop);
// obj.p = "Kolya";
// console.log(obj.prop);

function reverse(str) {
    var newString = "";
 
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
 
    return newString; 
}


function revNum(num) {
    const hasMinus = num < 0;

    let strNum = Math.abs(num).toString();
    let answer = parseInt(reverse(strNum));

    return hasMinus? -answer : answer;
}

console.log(revNum(-123000));