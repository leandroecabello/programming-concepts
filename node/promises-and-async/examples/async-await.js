const fs = require('fs').promises;
const path = require('path');
const fsSync = require('fs'); // Para operaciones síncronas

// Ejemplo usando async/await: leer dos archivos y combinar su contenido
// Este es el enfoque más moderno y legible

console.log('Iniciando operación con async/await...');

// Ruta de inputs y archivo de salida
const dirInputs = path.join(__dirname, '..', 'inputs');
const ruta1 = path.join(dirInputs, 'archivo1.txt');
const ruta2 = path.join(dirInputs, 'archivo2.txt');
const rutaResultado = path.join(dirInputs, 'resultado.txt');

// Crear archivos si no existen
if (!fsSync.existsSync(dirInputs)) fsSync.mkdirSync(dirInputs);

if (!fsSync.existsSync(ruta1)) {
    fsSync.writeFileSync(ruta1, 'Contenido del primer archivo de prueba.\n', 'utf8');
}

if (!fsSync.existsSync(ruta2)) {
    fsSync.writeFileSync(ruta2, 'Contenido del segundo archivo de prueba.\n', 'utf8');
}

// Función que lee un archivo
async function leerArchivo(rutaArchivo) {
    try {
        const contenido = await fs.readFile(rutaArchivo, 'utf8');
        console.log(`${path.basename(rutaArchivo)} leído correctamente`);
        return contenido;
    } catch (error) {
        console.error(`Error al leer ${path.basename(rutaArchivo)}:`, error);
        throw error;
    }
}

// Función que escribe en un archivo
async function escribirArchivo(rutaArchivo, contenido) {
    try {
        await fs.writeFile(rutaArchivo, contenido, 'utf8');
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
        const contenido1 = await leerArchivo(ruta1);
        const contenido2 = await leerArchivo(ruta2);
        
        // Combinar contenidos
        const contenidoCombinado = contenido1 + '\n' + contenido2;
        
        // Escribir resultado
        await escribirArchivo(rutaResultado, contenidoCombinado);
        
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

Para probar este ejemplo, los ejemplos se encuentran en el directorio `inputs`:
- `archivo1.txt`
- `archivo2.txt`

Nota: Este ejemplo usa la versión con promesas de fs (fs.promises)
que está disponible desde Node.js 10.0.0
*/ 