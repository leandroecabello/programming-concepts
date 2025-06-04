// Ejemplo que demuestra el orden de ejecución en el Event Loop de Node.js

console.log('1. Sincrónico: Se ejecuta primero');

// process.nextTick tiene la prioridad más alta entre las tareas asíncronas
process.nextTick(() => {
    console.log('2. process.nextTick: Se ejecuta después de las operaciones síncronas');
});

// Las promesas son microtasks y tienen alta prioridad
Promise.resolve().then(() => {
    console.log('3. Promise: Se ejecuta después de process.nextTick');
});

// setTimeout es una macrotask y tiene menor prioridad
setTimeout(() => {
    console.log('4. setTimeout: Se ejecuta después de las microtasks');
}, 0);

// setImmediate es otra macrotask
setImmediate(() => {
    console.log('5. setImmediate: Se ejecuta en la fase de check del event loop');
});

// Más operaciones síncronas
console.log('6. Sincrónico: Se ejecuta inmediatamente después del primer console.log');

// Una promesa dentro de un setTimeout
setTimeout(() => {
    console.log('7. setTimeout: Inicio del segundo setTimeout');
    Promise.resolve().then(() => {
        console.log('8. Promise dentro de setTimeout: Se ejecuta antes que el siguiente setTimeout');
    });
}, 0);

// Resultado esperado:
// 1. Sincrónico: Se ejecuta primero
// 6. Sincrónico: Se ejecuta inmediatamente después del primer console.log
// 2. process.nextTick: Se ejecuta después de las operaciones síncronas
// 3. Promise: Se ejecuta después de process.nextTick
// 5. setImmediate: Se ejecuta en la fase de check del event loop
// 4. setTimeout: Se ejecuta después de las microtasks
// 7. setTimeout: Inicio del segundo setTimeout
// 8. Promise dentro de setTimeout: Se ejecuta antes que el siguiente setTimeout

/*
Explicación del orden de ejecución:

1. Las operaciones síncronas (console.log) se ejecutan primero
2. process.nextTick tiene la prioridad más alta entre las tareas asíncronas
3. Las promesas (microtasks) se ejecutan después de process.nextTick
4. setImmediate y setTimeout (macrotasks) se ejecutan después de las microtasks
5. Cuando hay una promesa dentro de un setTimeout, la promesa se ejecuta 
   inmediatamente después de que el setTimeout se complete, antes de pasar 
   a la siguiente macrotask

Este ejemplo demuestra la jerarquía de prioridades en el Event Loop:
- Operaciones síncronas
- process.nextTick
- Promesas (microtasks)
- setImmediate/setTimeout (macrotasks)
*/ 