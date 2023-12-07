// let words = 'aku'
// console.log(words.length-1);
// console.log(words[1]);



let kata = 'AntCollab';
let jumlahKata = kata.length;

let e = '' // bikin ember sebelum loping buat nampung kata yang diambil

// bikin loop yg membuat jumlah kata berjalan dari belakang
// setiap looping berjalan, jumlah kata berkurang satu agar huruf yg diambil adalah huruf sebelumnya
for (let i = 0; jumlahKata > i; jumlahKata--) {
    // setiap kali memulai looping, menambah huruf terakhir
    e = e + kata[jumlahKata-1]
}
console.log(e);