// console.log(Math.floor(Math.random()*100));

// var a = [Math.floor(Math.random(a))*2];

// for (Math.floor(Math.random(a))) {
//     if (a = 0) {
//         console.log('Coba lagi ya');
//     } else if (a = 1) {
//         console.log('Coba');
//     } else {
//         console.log('Yes');
//     }
// }
let a = [1, 2, 3, 4, 5];
let angka = Math.floor(Math.random()*5) + 1;
console.log(angka);
switch (angka) {
    case 1:
        console.log('Coba lagi ya.');
        break;
    case 2:
        console.log('Selamat kamu mendapatkan kupon sebanyak 5.');
        break;
    case 3:
        console.log('Selamat kamu mendapatkan kupon sebanyak 15.');
        break
    case 4:
        console.log('Selamat kamu mendapatkan kupon sebanyak 50.');
        break;
    case 5:
        console.log('WOW, kamu menang jackpot! Selamat!!');
}