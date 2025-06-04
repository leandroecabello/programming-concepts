const fs = require('fs').promises; // Usamos la versión con promesas de fs

// Ejemplo usando Promesas: leer dos archivos y combinar su contenido
// Este enfoque es más limpio y fácil de mantener que los callbacks

console.log('Iniciando operación con Promesas...');

// Función que lee un archivo (ya devuelve una promesa)
async function leerArchivo(nombreArchivo) {
    try {
        const contenido = await fs.readFile(nombreArchivo, 'utf8');
        console.log(`${nombreArchivo} leído correctamente`);
        return contenido;
    } catch (error) {
        console.error(`Error al leer ${nombreArchivo}:`, error);
        throw error; // Re-lanzamos el error para manejarlo en el catch principal
    }
}

// Función que escribe en un archivo
async function escribirArchivo(nombreArchivo, contenido) {
    try {
        await fs.writeFile(nombreArchivo, contenido, 'utf8');
        console.log('Archivo escrito correctamente');
    } catch (error) {
        console.error('Error al escribir archivo:', error);
        throw error;
    }
}

// Usando promesas con .then()
leerArchivo('archivo1.txt')
    .then(contenido1 => {
        return leerArchivo('archivo2.txt')
            .then(contenido2 => {
                return contenido1 + '\n' + contenido2;
            });
    })
    .then(contenidoCombinado => {
        return escribirArchivo('resultado.txt', contenidoCombinado);
    })
    .then(() => {
        console.log('Proceso completado con éxito');
    })
    .catch(error => {
        console.error('Error en el proceso:', error);
    });

/*
Ventajas de este enfoque:
1. Código más plano y fácil de leer
2. Mejor manejo de errores con .catch()
3. Más fácil de mantener y testear
4. Permite encadenar operaciones de forma clara
5. Evita el callback hell

Para probar este ejemplo, necesitas crear dos archivos:
- archivo1.txt con algún contenido
- archivo2.txt con algún contenido

Nota: Este ejemplo usa la versión con promesas de fs (fs.promises)
que está disponible desde Node.js 10.0.0 
*/