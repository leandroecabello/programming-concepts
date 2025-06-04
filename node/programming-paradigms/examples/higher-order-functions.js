// Uso de map y filter (funciones de orden superior)
const numeros = [1,2,3,4];
const duplicados = numeros.map(n => n * 2); // map recibe una funcion
const pares = numeros.filter(n => n % 2 === 0); // filter tambien

console.log('Duplicados:', duplicados);
console.log('Pares:', pares);

// Funcion que recibe otra como parametro
function ejecutar(fn) {
  return fn();
}
ejecutar(() => console.log('Hola desde una funcion pasada como argumento'));
