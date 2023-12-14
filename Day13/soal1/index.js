function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
        console.log('""');
        return;
    }
    
    const currentYear = 2023;
    
    for (let i = 0; i < arr.length; i++) {
        const [firstName, lastName, gender, birthYear] = arr[i];
        let age = 'Invalid Birth Year';
    
        if (birthYear && birthYear <= currentYear) {
          age = currentYear - birthYear;
        }
    
        console.log(`${firstName} ${lastName}: {
          firstName: '${firstName}',
          lastName: '${lastName}',
          gender: '${gender}',
          age: ${age}
        }`);
    }
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""