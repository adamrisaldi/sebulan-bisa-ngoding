function cariMedian(arr) {
    // you can only write your code here!
    let panjangArr = arr.length;
    let indexTengah = Math.floor(panjangArr/2);

    if (panjangArr % 2 === 1) {
        return arr[indexTengah];
    } else {
        return (arr[indexTengah-1] + arr[indexTengah]) / 2;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5