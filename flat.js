function flatRec(arr, depth = 1) {
    return depth > 0 
                ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatRec(val, depth - 1) : val), [])
                : arr;
 };

 const arr = [3, 4, 6, [5, 6, [6, 7, [8]]], 5]

 console.log(flatRec(arr, 7));