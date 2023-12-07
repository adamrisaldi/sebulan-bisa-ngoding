var nama = 'Adam';
var usia = 9;
var jumlahUang = 500000;

var hargaBuku = 100000;
var sisaUang = jumlahUang - hargaBuku;

if (nama !== '' && usia >= 10 && jumlahUang >= 100000) {
    console.log(`Anda dapat mencari buku. Sisa uang anda: ${sisaUang}`);
} else if (nama === '' && usia >= 10 && jumlahUang >= 100000) {
    console.log("Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu.");
} else if (nama !== '' && usia < 10 && jumlahUang >= 100000) {
    console.log("Anda hanya boleh mencari buku anak-anak");
} else {
    console.log("Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang.");
}