# Paradigmas de Programación en Node.js

Este apartado repasa de forma breve algunos conceptos sobre programación en JavaScript/Node.js.

## Imperativo vs Declarativo

| Imperativo | Declarativo |
|------------|-------------|
| Describe **cómo** lograr un resultado paso a paso. | Describe **qué** resultado esperamos y el "cómo" lo maneja el lenguaje o librería. |

**Ejemplo Imperativo**
```js
const numeros = [1,2,3,4,5];
const pares = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}
console.log(pares); // [2,4]
```

**Ejemplo Declarativo**
```js
const numeros = [1,2,3,4,5];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2,4]
```

## Funciones Puras
Una función es *pura* cuando, para los mismos parámetros, siempre devuelve el mismo resultado y no produce efectos secundarios.

```js
function suma(a, b) {
  return a + b; // pura
}

let total = 0;
function agregar(a) {
  total += a; // impura: modifica un estado externo
}
```

## Funciones de Primer Orden
Las *higher-order functions* son funciones que reciben o devuelven otras funciones.

```js
const numeros = [1,2,3];
const alCuadrado = numeros.map(n => n * n); // map recibe una función

function ejecutar(fn) {
  return fn();
}
ejecutar(() => console.log('Hola')); // pasa una función como argumento
```

Para más ejemplos consulta la carpeta `examples/`.
