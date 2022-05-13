const uniqueWithSet = (array) => [...new Set(array)];

const uniqueWithFilter = (array) => array.filter((el, index) => 
    array.indexOf(el) === index);

function uniqueWithArray (array) {
    const result = [];
    array.forEach(el => {
        if (!result.includes(el)) result.push(el);
    });
    return result;
}

function uniqueWithObject (array) {
    const seen = {};
    const result = [];

    array.forEach((el) => {
        const name = el.toString();
        if (!seen.hasOwnProperty(name)) {
            seen[name] = 1;
            result.push(el);
        }
    });
    
    return result;
}


export function createArrayWithoutDuplicates(arr1, arr2){ 
    return [...new Set(arr1), ...new Set(arr2)];
 }

const array = [4, 5, 4, 6, 5, 8, 10];

console.log(uniqueWithSet(array).toString());
console.log(uniqueWithFilter(array).toString());
console.log(uniqueWithArray(array).toString());
console.log(uniqueWithObject(array).toString());
