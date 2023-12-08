let rows = 5;

for (rows; rows > 0; rows--) {
    console.log('*');
}


/*------------------------------*/

let rows2 = 5;

for (let i = 0; i < rows2; i++) {
    let ember ='';
    for (let j = 5; j > 0; j--) {
    ember += '*';
    }
    console.log(ember, "dari rows dua cetakan ke " + `${i}`);
}

/*------------------------------*/

let rows3 = 5;
let star = '';

for (let i = 0; i < rows3; i++) {
    for (let j = 1; j > 0 ; j--) {
    star += '*';
    }
    console.log(star);
}

/*------------------------------*/

let rows4 = 5;

for (let i = 0; rows4 > i; rows4--) {
    let b = '';
    for (let u = 0; u < rows4; u++) {
    b += '*';
    }
    console.log(b);
}
