const fs = require('fs').promises; // Usamos la versión con promesas de fs
const path = require('path');
const fsSync = require('fs'); // Para operaciones síncronas

// Ejemplo usando Promesas: leer dos archivos y combinar su contenido
// Este enfoque es más limpio y fácil de mantener que los callbacks

console.log('Iniciando operación con Promesas...');

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

// Función que lee un archivo (ya devuelve una promesa)
async function leerArchivo(rutaArchivo) {
    try {
        const contenido = await fs.readFile(rutaArchivo, 'utf8');
        console.log(`${path.basename(rutaArchivo)} leído correctamente`);
        return contenido;
    } catch (error) {
        console.error(`Error al leer ${path.basename(rutaArchivo)}:`, error);
        throw error; // Re-lanzamos el error para manejarlo en el catch principal
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

// Usando promesas con .then()
leerArchivo(ruta1)
    .then(contenido1 => {
        return leerArchivo(ruta2)
            .then(contenido2 => {
                return contenido1 + '\n' + contenido2;
            });
    })
    .then(contenidoCombinado => {
        return escribirArchivo(rutaResultado, contenidoCombinado);
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

Para probar este ejemplo, los ejemplos se encuentran en el directorio `inputs`:
- `archivo1.txt`
- `archivo2.txt`

Nota: Este ejemplo usa la versión con promesas de fs (fs.promises)
que está disponible desde Node.js 10.0.0
*/