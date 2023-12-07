// let rows1 = '';

// for(let i = 0; i < 5; i++) {
//     rows1 += '*';
//     rows1 += '\n';
// }
// console.log(rows1);

let rows = 5;

for (rows; rows > 0; rows--) {
    console.log('*');
}


/*------------------------------*/

// let rows2 = '';

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         rows2 += '*';
//     }
//     rows2 += '\n';
// }
// console.log(rows2);

// let rows2 = 5;

// for (rows2; rows2 > 0; rows2--) {
//     console.log('*****');
// }

let rows2 = 5;

for (let i = 0; i < rows2; i++) {
    let ember ='';
    for (let j = 5; j > 0; j--) {
    ember += '*';
    }
    console.log(ember, "dari rows dua cetakan ke " + `${i}`);
}

/*------------------------------*/

// let rows3 = '';

// for(let i = 0; i < 5; ) {
//     for(let j = 0; j <= i; j++) {
//         rows3 += '*';
//     }
//     rows3 += '\n';
//     i++
// }
// console.log(rows3);

// let rows3 = 5;
// let star = ""

// for (let i = 0; i < rows3; i++) {
//     star += '*'
//     console.log(star);
// }

let rows3 = 5;
let star = '';

for (let i = 0; i < rows3; i++) {
    for (let j = 1; j > 0 ; j--) {
    star += '*';
    }
    console.log(star);
}

/*------------------------------*/

// let rows4 = '';

// for(let i = 5; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//         rows4 += '*';
//     }
//     rows4 += '\n';
// }
// console.log(rows4);

let rows4 = 5;

for (let i = 0; rows4 > i; rows4--) {
    let b = '';
    for (let u = 0; u < rows4; u++) {
    b += '*';
    }
    console.log(b);
}
