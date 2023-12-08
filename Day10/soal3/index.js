function vocalSeeker(board) {
    let vocal = '';
    let jumlahVocal = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (typeof board[i][j] === 'string' && board[i][j] === 'a' || board[i][j] === 'A' || board[i][j] === 'i' || board[i][j] === 'I' || board[i][j] === 'u' || board[i][j] === 'U' || board[i][j] === 'e' || board[i][j] === 'E' || board[i][j] === 'o' || board[i][j] === 'O') {
                vocal += board[i][j];
                jumlahVocal++;
            }
        }
    }
    return `vokal ditemukan ${jumlahVocal} dan kumpulan vokal adalah ${vocal}`;
}

let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b',]
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo