function changeVocals(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    switch (char) {
      case 'a': result += 'b'; break;
      case 'i': result += 'j'; break;
      case 'u': result += 'v'; break;
      case 'e': result += 'f'; break;
      case 'o': result += 'p'; break;
      case 'A': result += 'B'; break;
      case 'I': result += 'J'; break;
      case 'U': result += 'V'; break;
      case 'E': result += 'F'; break;
      case 'O': result += 'P'; break;
      default: result += char; break;
    }
  }
  return result;
}
  
function reverseWord(str) {
  let jumlahKata = str.length;
  let result = '';

  for (let i = 0; jumlahKata > i; jumlahKata--) {
      result += str[jumlahKata-1];
  }
  return result;
}
  
function setLowerUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
  
function removeSpaces(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  return result;
}
  
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let changedVocals = changeVocals(name);
  let reversed = reverseWord(changedVocals);
  let lowerUpperCased = setLowerUpperCase(reversed);
  let removedSpaces = removeSpaces(lowerUpperCased);

  return removedSpaces;  
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'