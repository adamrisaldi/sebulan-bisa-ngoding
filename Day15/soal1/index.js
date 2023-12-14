function getFruitsAbovePrice(fruits, minPrice) {
    // Implementasikan kode Anda di sini
    const expensiveFruits = fruits.filter(fruit => fruit.price >= minPrice);
    const expensiveFruitNames = expensiveFruits.map(fruit => fruit.name);
    return expensiveFruitNames;
}

const fruits = [
    { name: "Apple", price: 0.5 },
    { name: "Banana", price: 0.25 },
    { name: "Orange", price: 0.7 },
];
  
const expensiveFruits = getFruitsAbovePrice(fruits, 0.5);
console.log(expensiveFruits); // Contoh output: ["Apple", "Orange"]