function getSortedUniqueNumbers(numbers) {
    // Implementasikan kode Anda di sini
    const deleteDuplicateNUmbers = [...new Set(numbers)];
    const sortedUniqueNumbers = deleteDuplicateNUmbers.sort((i,j) => {return i-j});
    return sortedUniqueNumbers;
}

const numbers = [10, 5, 2, 10, 3, 5, 7, 2, 8];

const sortedUniqueNumbers = getSortedUniqueNumbers(numbers);
console.log(sortedUniqueNumbers); // Contoh output: [2, 3, 5, 7, 8, 10]