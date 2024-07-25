let a = 1

let time = setInterval(function contador(){
    console.log(a)
    a++
}, 1000)

setTimeout(() => {
    clearInterval(time)
}, 10500);