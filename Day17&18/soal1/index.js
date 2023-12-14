let num = 6;
let pattern = '';

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    pattern += ' ';
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    if (k % 2 === 0) {
      pattern += 'o';
    } else {
      pattern += 'x';
    }
  }
  pattern += '\n';
}

console.log(pattern);