"use sitrict"

let navio = {
    name: "MARENO",
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717
}

for (let key in navio){
    console.log(`${key} - ${navio[key]}`)
}