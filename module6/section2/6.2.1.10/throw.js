console.log("start"); // -> start
try {
    throw 0;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end