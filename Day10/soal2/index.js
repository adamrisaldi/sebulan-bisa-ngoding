function ladder(word) {
    const arr = [];

    for (let i = word.length; i >= 1; i--) {
        let nestArr = [];

        for (let j = 0; j < i; j++) {
            nestArr.push(word[j]);
        }
        arr.push(nestArr);
    }
    return arr;
}

console.log(ladder('iphone14'));