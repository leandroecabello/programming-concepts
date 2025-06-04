const fs = require('fs').promises;

// Ejemplo usando async/await: leer dos archivos y combinar su contenido
// Este es el enfoque más moderno y legible

console.log('Iniciando operación con async/await...');

// Función que lee un archivo
async function leerArchivo(nombreArchivo) {
    try {
        const contenido = await fs.readFile(nombreArchivo, 'utf8');
        console.log(`${nombreArchivo} leído correctamente`);
        return contenido;
    } catch (error) {
        console.error(`Error al leer ${nombreArchivo}:`, error);
        throw error;
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

// Función principal que usa async/await
async function procesarArchivos() {
    try {
        // Leer ambos archivos
        const contenido1 = await leerArchivo('archivo1.txt');
        const contenido2 = await leerArchivo('archivo2.txt');
        
        // Combinar contenidos
        const contenidoCombinado = contenido1 + '\n' + contenido2;
        
        // Escribir resultado
        await escribirArchivo('resultado.txt', contenidoCombinado);
        
        console.log('Proceso completado con éxito');
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
}

// Ejecutar la función principal
procesarArchivos();

/*
Ventajas de este enfoque:
1. Código más limpio y fácil de leer
2. Sintaxis similar a código síncrono
3. Manejo de errores con try/catch
4. Más fácil de mantener y testear
5. Mejor para operaciones secuenciales

Para probar este ejemplo, necesitas crear dos archivos:
- archivo1.txt con algún contenido
- archivo2.txt con algún contenido

Nota: Este ejemplo usa la versión con promesas de fs (fs.promises)
que está disponible desde Node.js 10.0.0
*/ 