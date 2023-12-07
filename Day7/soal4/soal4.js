// let angka = 56;
// let angkaPalindromeSelanjutnya = cekPalindrome(angka);

// function isPalindrome(a) {
//     var angkaString = a.toString();
//     var panjang = angkaString.length;
  
//     for (var i = 0; i < Math.floor(panjang / 2); i++) {
//       if (angkaString[i] !== angkaString[panjang - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
// }

// function cekPalindrome(a) {
//     a++;
  
//     while (!isPalindrome(a)) {
//       a++;
//     }
//     return a;
// }

// console.log(angkaPalindromeSelanjutnya);
// ============================================

// let ditemukan = false;
// let angka = 56;

// while(ditemukan === false){
//   let numstring = angka.toString();
//   let jumlahKata = numstring.length;

//   let result
//   for (let i = 0; i<jumlahKata; i++) {
//       if (numstring[i] !== numstring[numstring.length-1-i]) {
//           result = false;
//           break;
//       }
//   result = true;
//   }
  
//   if(result === true) {
//     return angka;
//   } else {
//     angka += 1;
//   }
// }

// console.log(angka)


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