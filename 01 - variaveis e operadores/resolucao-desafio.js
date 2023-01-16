
const precoCombustivel = 4.99;
const kmPorLitros = 15;
const distanciaEmKm = 120;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
