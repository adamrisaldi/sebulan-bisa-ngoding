let detik = 1

// function formatWaktu(detik){
let menit = 0

for (let i = 60; detik > i; ){
    menit++
    detik = detik-60
} 

if (detik < 10) {
    console.log(`${menit}:0${detik}`)
} else {
    console.log(`${menit}:${detik}`)
}
//}

// formatWaktu(555)
// formatWaktu(100)
