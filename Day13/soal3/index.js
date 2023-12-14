let num = 'antcollab';
let jumlahKata = num.length;
let jumlahSpasi = jumlahKata-1;

for (let i = 0; i < num.length; i++) {
    let pola = '';
    for (let j = 0; j < num.length; j++) {
        if (j < jumlahSpasi) {
            pola += ' ';
        } else {
            pola += num[j];
        }
    }
    jumlahSpasi--;
    console.log(pola);
}