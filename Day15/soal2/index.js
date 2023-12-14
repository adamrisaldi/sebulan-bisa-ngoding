function getUsersUnderAge(users, maxAge) {
    // Implementasikan kode Anda di sini
    const youngUsers = users.filter(user => user.age <= maxAge);
    return youngUsers;
}

const users = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

const youngUsers = getUsersUnderAge(users, 28);
console.log(youngUsers); // Contoh output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 22 }]