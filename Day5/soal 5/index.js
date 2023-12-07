ALGORITMA

1. mulai program
2. budi menyimpan buku di rak buku dengan kapasitas 10 buku
3. buku disimpan dengan nama variabel "buku"
4. setiap budi menambah 1 buku untuk disimpan, rak buku bertambah jumlahnya
5. jika budi menambah buku tetapi rak sudah penuh, maka budi tidak dapat menyimpan buku baru
6. selesai


PSEUCODE

START 
    INPUT buku

    FOR buku = 1 TO 10
        IF buku <= 10
            OUTPUT "Budi menyimpan buku baru ke rak buku."
            OUTPUT "Budi memiliki 1 buku di rak buku."
        ELSE
            OUTPUT "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru."
    ENDIF
END 