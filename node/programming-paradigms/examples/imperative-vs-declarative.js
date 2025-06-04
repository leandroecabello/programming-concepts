// Filtrar numeros pares - estilo imperativo
const numeros = [1,2,3,4,5,6];
const paresImperativos = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    paresImperativos.push(numeros[i]);
  }
}
console.log('Imperativo:', paresImperativos);

// Filtrar numeros pares - estilo declarativo
const paresDeclarativos = numeros.filter(n => n % 2 === 0);
console.log('Declarativo:', paresDeclarativos);
