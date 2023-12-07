// const number = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20]

// console.log(number.slice(0, 3, 4, 5, 7));
// console.log(number.slice(1, 6, 9));
// console.log(number.slice(2, 8));


-------------------------------------------------------------
ALGORITMA

1. memulai program
2. user memasukkan angka array
3. simpan angka ke dalam sebuah variabel "number"
4. kelompokan angka menjadi 3 kelompok:
    kelompok pertama, angka merupakan kelipatan 3.
    kelompok kedua, angka merupakan kelipatan 5.
    kelompok ketiga, angka yang bukan kelipatan 3 dan 5.
5. tampilkan hasil pengelompokan kepada user
6. selesai

-------------------------------------------------------------
PSEUCODE

START
    INPUT number = []

    IF number % 3 = 0
        OUTPUT "Kelompok Pertama: []"

    ELSE IF number % 5 = 0
        OUTPUT "Kelompok Kedua: []"
    ELSE
        OUTPUT "Kelompok Ketiga: []"
    ENDIF
END