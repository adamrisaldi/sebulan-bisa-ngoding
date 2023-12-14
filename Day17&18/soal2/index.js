let num = 6;
let pattern = '';

if (num < 4 || num > 10) {
    console.log('Invalid Number');
    return;
}

for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
        for (let j = 0; j < num; j++) {
        pattern += '#';
        }
    } else {
        for (let k = 0; k < num; k++) {
            if (k === Math.floor(num / 2)) {
                pattern += '|';
            } else if (k === (num / 2)-1) {
                pattern += '|';
            } else {
                pattern += ' ';
            }
        }
        
    }
    pattern += '\n';
}

console.log(pattern);