const fs = require('fs');
const path = require('path');

// Ejemplo de callback hell: leer dos archivos y combinar su contenido
// Este enfoque puede volverse difícil de mantener y leer

console.log('Iniciando operación con callbacks...');

// Ruta de inputs y archivo de salida
const dirInputs = path.join(__dirname, '..', 'inputs');
const ruta1 = path.join(dirInputs, 'archivo1.txt');
const ruta2 = path.join(dirInputs, 'archivo2.txt');
const rutaResultado = path.join(dirInputs, 'resultado.txt');

// Crear archivos si no existen
if (!fs.existsSync(dirInputs)) fs.mkdirSync(dirInputs);

if (!fs.existsSync(ruta1)) {
    fs.writeFileSync(ruta1, 'Contenido del primer archivo de prueba.\n', 'utf8');
}

if (!fs.existsSync(ruta2)) {
    fs.writeFileSync(ruta2, 'Contenido del segundo archivo de prueba.\n', 'utf8');
}


// Función que lee un archivo y llama a un callback
function leerArchivo(rutaArchivo, callback) {
    fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
        if (error) return callback(error);
        callback(null, contenido);
    });
}

// Función que escribe en un archivo
function escribirArchivo(rutaArchivo, contenido, callback) {
    fs.writeFile(rutaArchivo, contenido, 'utf8', (error) => {
        if (error) return callback(error);
        callback(null);
    });
}

// Aquí comienza el callback hell
leerArchivo(ruta1, (error1, contenido1) => {
    if (error1) return console.error('Error al leer archivo1:', error1);
    console.log('Archivo 1 leído correctamente');
    
    // Primer nivel de anidación
    leerArchivo(ruta2, (error2, contenido2) => {
        if (error2) return console.error('Error al leer archivo2:', error2);
        console.log('Archivo 2 leído correctamente');
        
        // Segundo nivel de anidación
        const contenidoCombinado = contenido1 + '\n' + contenido2;

        escribirArchivo(rutaResultado, contenidoCombinado, (error3) => {
            if (error3) return console.error('Error al escribir resultado:', error3);
            console.log('Proceso completado con éxito');
        });
    });
});

/*
Problemas con este enfoque:
1. Código difícil de leer y mantener
2. Manejo de errores repetitivo
3. Difícil de reutilizar
4. Difícil de testear
5. Propenso a errores por anidación excesiva

Para probar este ejemplo, los ejemplos se encuentran en el directorio `inputs`:
- `archivo1.txt`
- `archivo2.txt`
*/ 