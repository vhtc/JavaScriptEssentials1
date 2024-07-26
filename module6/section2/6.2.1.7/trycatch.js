let a = -2

try {
    a = b
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, B não foi definida")
    }else{
        console.log("Outro erro"+error)
    }
} finally{
    console.log("A = "+a)
}