// Penggabungan Kata
var kataPertama = 'Saya';
var kataKedua = 'adalah';
var kataKetiga = 'seorang';
var kataKeempat = 'programmer';
var kataKelima = 'handal';

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima} \n`);

// Pemecahan Kata - Karakter per Karakter
var kalimat = 'Hari ini adalah hari yang cerah';

let text = "";
for (let i = 0; i < kalimat.length; i++) {
  text += kalimat[i] + "\n";
}
console.log(text);

// Pemecahan Kata Menggunakan Substring
var a = 'Hari ini adalah hari yang cerah';

console.log(a.substring(0, 4));
console.log(a.substring(5, 8));
console.log(a.substring(9, 15));
console.log(a.substring(16, 20));
console.log(a.substring(21, 25));
console.log(a.substring(26, 31) + "\n");

// Pemecahan Kata dan Perhitungan Panjangnya
var b = 'Hari ini adalah hari yang cerah';

var satu = b.substring(0, 4);
var dua = b.substring(5, 8);
var tiga = b.substring(9, 15);
var empat = b.substring(16, 20);
var lima = b.substring(21, 25);
var enam = b.substring(26, 31);

console.log(satu + ' (panjang: ' + satu.length +')');
console.log(dua + ' (panjang: ' + dua.length +')');
console.log(tiga + ' (panjang: ' + tiga.length +')');
console.log(empat + ' (panjang: ' + empat.length +')');
console.log(lima + ' (panjang: ' + lima.length +')');
console.log(enam + ' (panjang: ' + enam.length +')');