let ditemukan = false;
let angka = 556;

while (!ditemukan) {
  let numstring = angka.toString();
  let jumlahKata = numstring.length;

  let result;
  for (let i = 0; i < jumlahKata; i++) {
    if (numstring[i] !== numstring[numstring.length - 1 - i]) {
      result = false;
      break;
    }
    result = true;
  }

  if (result) {
    ditemukan = true;
  } else {
    angka += 1;
  }
}
console.log(`angka palindrome selanjutnya adalah ${angka}`);
