function groupAnimals(animals) {
    let animalGroups = {};

    for (let animal of animals) {
        let firstLetter = animal[0];
        if (!animalGroups[firstLetter]) {
        animalGroups[firstLetter] = [];
        }
        animalGroups[firstLetter].push(animal);
    }

    let result = [];
    for (let group in animalGroups) {
        result.push(animalGroups[group]);
    }

    return sortResult(result);
}

function sortResult(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j][0][0] > arr[j + 1][0][0]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]  