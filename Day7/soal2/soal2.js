//Menghitung jumlah huruf vokal

let kalimat = 'I have a dream';
let jumlahVokal = 0;

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === 'a' || kalimat[i] === 'A') {
        jumlahVokal++;
    } else if (kalimat[i] === 'i' || kalimat[i] === 'I') {
        jumlahVokal++;
    } else if (kalimat[i] === 'u' || kalimat[i] === 'U') {
        jumlahVokal++;
    } else if (kalimat[i] === 'e' || kalimat[i] === 'E') {
        jumlahVokal++;
    } else if (kalimat[i] === 'o' || kalimat[i] === 'O') {
        jumlahVokal++;
    }
}
console.log(jumlahVokal);