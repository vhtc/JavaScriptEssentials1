let part = 0;
console.time('Tempo de Programa');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915
console.timeEnd('Tempo de Programa'); // -> Leibniz: 456.60498046875 ms
