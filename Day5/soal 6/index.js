
/* function isprime(num){}
for (let number = 0; number < 50; number++) {
    isprime()
    
}
for (let number = 2; number <= 50; number++){
for (let index = number; index < array.length; index++) {
    const element = array[index];
    
}
  } */

//   bikin function untuk ngcek apakah bilangan tersebut prima atau tidak
// loop bilangan prima antara 1 hingga 50 di daamnya menjalankan fungsi untuk ngcek diatas


for (let number = 1; number <= 50; number++) {
  let a = 0;
  for (let prima = 2; prima < number; prima++) {
    if (number % prima == 0) {
      a = 1;
    }
  }
  if (number > 1 && a == 0){
    console.log(number);
  }
}