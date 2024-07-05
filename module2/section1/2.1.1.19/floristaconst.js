"use sctrict"
// preço unitário 
const valorRose = 8
const valorLily = 10
const valorTulip = 2

// quantidade de cada flor
let quantidadeRose = 70
let quantidadeLily = 50
let quantidadeTulip = 120

//total unitario
let totalRose = valorRose * quantidadeRose
let totalLily = valorLily * quantidadeLily
let totalTulip = valorTulip * quantidadeTulip

//total geral
let totalFlorista = totalRose + totalLily + totalTulip

console.log('Valor Rose: ' + totalRose)
console.log('Valor Lily: ' + totalLily)
console.log('Valor Tulip: ' + totalTulip)

console.log('Valor Final: ' + totalFlorista)

quantidadeRose = quantidadeRose - 20
quantidadeLily = quantidadeLily - 30

totalRose = valorRose * quantidadeRose
totalLily = valorLily * quantidadeLily
totalTulip = valorTulip * quantidadeTulip

totalFlorista = totalRose + totalLily + totalTulip

console.log('Valor Rose: ' + totalRose)
console.log('Valor Lily: ' + totalLily)
console.log('Valor Tulip: ' + totalTulip)

console.log('Valor Final: ' + totalFlorista)