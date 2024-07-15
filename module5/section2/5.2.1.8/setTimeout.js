var x = 0

function cont() {
    console.log(`${x} segundos`)
    
    if (x < 5) {
        // setTimeout(() => {

        //     cont()
        // }, 1000)
        
        setTimeout(cont, 1000)
        x++
    }
}
cont()