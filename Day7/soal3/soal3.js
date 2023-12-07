let kata = 'katam';
let jumlahKata = kata.length;
let a = '';

let result
for (let i = 0; i<jumlahKata ; i++) {
    if (kata[i] !== kata[kata.length-1-i]) {
        result =false
        break
    }
result =true
}
console.log(result)


// for (let i = 0; jumlahKata > i; jumlahKata--) {
//     a += kata[jumlahKata-1];
// } 

// if (kata === a) {
//     console.log(true);
// }