let daftarAntrian = ["Joko", "Abdul", "Budi"];

// Antrian

function antrian(line, person) {
    line.push(person);
    return line;
}

let antrianBaru = "Boy";

let baru = antrian(daftarAntrian, antrianBaru);
console.log(baru);


// Panggil Antrian

function panggilAntrian(line) {
    line.shift();
    return line;
}

panggilAntrian(daftarAntrian);
console.log(daftarAntrian);


// Tumpukan

function tumpukan(line, title) {
    line.unshift(title);
    return line;
}

tambahAntrian = 'Iwan';

let tambah = tumpukan(daftarAntrian, tambahAntrian);
console.log(tambah);


// Ganjil Genap

function ganjilGenap(plat) {
    if (plat === '') {
        return 'data tidak ditemukan';
    }

    if (!plat) {
        return 'invalid data';
    }

    let genap = 0;
    let ganjil = 0;

    let platArray = plat.split(';');

    for (let i = 0; i < platArray.length; i++) {
        if (platArray[i] % 2 == 0) {
            genap++;
        } else {
            ganjil++;
        }
    }

    if (genap > 0 && ganjil > 0) {
        return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
    } else if (genap > 0) {
        return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
    } else {
        return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
    }
};

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data