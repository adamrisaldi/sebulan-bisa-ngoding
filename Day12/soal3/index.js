function splitting(str) {
    if (str === '') {
        return [];
    }
    return str.split(',').map(hero => hero.split('-'));
}

function meleeRangedGrouping(str) {
    if (str === '') {
    return [];
    }

    const heroes = splitting(str);
    let result = [[], []];

    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i][1] === 'Ranged') {
        result[0].push(heroes[i][0]);
        } else if (heroes[i][1] === 'Melee') {
        result[1].push(heroes[i][0]);
    }
}

return result;
}

// TEST CASES
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []