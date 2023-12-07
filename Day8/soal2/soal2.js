let kata = 'AntCollab';
let jumlahKata = kata.length;
let jumlahSpasi = jumlahKata-1;

for (let a = 0; a < kata.length; a++) {
    let e = '';
    for (let i = 0; i < kata.length; i++) {
        if (i < jumlahSpasi){
            e = e + ' ';
        } else {
            e = e + kata[i];
        }
    }
    jumlahSpasi--;
    console.log(e);
}