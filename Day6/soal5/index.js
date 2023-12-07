var kata = 'acacac';
var jumlahA = 0 
var jumlahC = 0

for (var i = 0; i < kata.length; i++) {
    if (kata[i] === 'a') {
        jumlahA++;
    } else if (kata[i] === 'c'){
        jumlahC++;
    }
}

if (jumlahA === jumlahC) {
    console.log(true)
} else {
    console.log(false)
}