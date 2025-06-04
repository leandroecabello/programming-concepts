# 🔄 Asincronismo en Node.js

El asincronismo es una característica fundamental de Node.js que permite ejecutar operaciones sin bloquear el hilo principal. Esto es especialmente útil para operaciones I/O como leer archivos, hacer peticiones HTTP o consultar bases de datos.

Vamos a ver tres enfoques para manejar asincronismo:
- `Callbacks`
- `Promesas`
- `async/await`

## 📞 Callbacks

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando una operación asíncrona se completa.

```javascript
const fs = require('fs');

fs.readFile('archivo.txt', (error, data) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Datos:', data);
});
```

### ⚠️ El problema del Callback Hell

Cuando necesitamos encadenar varias operaciones asíncronas, los callbacks pueden volverse difíciles de mantener:

```javascript
fs.readFile('archivo1.txt', (error1, data1) => {
    if (error1) return console.error(error1);
    fs.readFile('archivo2.txt', (error2, data2) => {
        if (error2) return console.error(error2);
        fs.writeFile('resultado.txt', data1 + data2, (error3) => {
            if (error3) return console.error(error3);
            console.log('¡Listo!');
        });
    });
});
```

## 🤝 Promesas

Las Promesas son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Tienen tres estados:
- **pending**: estado inicial
- **fulfilled**: operación completada con éxito
- **rejected**: operación fallida

### Crear una Promesa

```javascript
const miPromesa = new Promise((resolve, reject) => {
    const exito = true;
    // Operación asíncrona
    if (/* éxito */) {
        resolve(resultado);
    } else {
        reject(error);
    }
});
```

### Encadenar Promesas

```javascript
miPromesa
    .then(resultado => {
        console.log('Resultado:', resultado);
        return procesar(resultado);
    })
    .then(final => {
        console.log('Final:', final);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## ⚡ async/await

`async/await` es una forma más moderna y legible de trabajar con Promesas. Permite escribir código asíncrono de manera síncrona.

### Sintaxis básica

```javascript
async function miFuncion() {
    try {
        const resultado = await miPromesa;
        const procesado = await procesar(resultado);
        console.log('Procesado:', procesado);
        return procesado;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## 🔄 Comparativa

| Enfoque | Ventajas | Desventajas |
|---------|----------|-------------|
| Callbacks | Simple, ampliamente soportado | Callback hell, difícil de mantener |
| Promesas | Mejor manejo de errores, encadenamiento | Sintaxis más verbosa que async/await |
| async/await | Código más legible, manejo de errores con try/catch | Requiere funciones async, puede ser más lento |

## 📁 Ejemplos Prácticos

En la carpeta `examples` encontrarás tres archivos que demuestran los diferentes enfoques para resolver el mismo problema:

1. `callback-hell.js`: Usando callbacks anidados
2. `promise-example.js`: Usando Promesas
3. `async-await.js`: Usando async/await

Cada ejemplo muestra cómo leer dos archivos y combinar su contenido, pero con diferentes estilos de programación asíncrona.

## 🎯 Mejores Prácticas

1. **Evita el Callback Hell**: Usa Promesas o async/await para operaciones asíncronas complejas
2. **Manejo de Errores**: Siempre incluye `.catch()` o bloques `try/catch`
3. **Async/Await**: Prefiere async/await para código más legible y mantenible
4. **Promesas en Paralelo**: Usa `Promise.all()` para operaciones independientes

## 📚 Recursos Adicionales

- [MDN Web Docs: Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: async/await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [Node.js: Callbacks](https://nodejs.org/en/learn/asynchronous-work/understanding-javascript-promises) 