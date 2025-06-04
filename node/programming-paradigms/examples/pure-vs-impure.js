// Funcion pura: no modifica estado externo y siempre retorna el mismo valor
function suma(a, b) {
  return a + b;
}
console.log('Pura:', suma(2,3));

// Funcion impura: depende de una variable externa
let total = 0;
function agregar(valor) {
  total += valor; // modifica estado global
  return total;
}
console.log('Impura:', agregar(2));
console.log('Impura:', agregar(3));
