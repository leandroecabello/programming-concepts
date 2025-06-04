const fs = require('fs');

// Ejemplo de callback hell: leer dos archivos y combinar su contenido
// Este enfoque puede volverse difícil de mantener y leer

console.log('Iniciando operación con callbacks...');

// Función que lee un archivo y llama a un callback
function leerArchivo(nombreArchivo, callback) {
    fs.readFile(nombreArchivo, 'utf8', (error, contenido) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null, contenido);
    });
}

// Función que escribe en un archivo
function escribirArchivo(nombreArchivo, contenido, callback) {
    fs.writeFile(nombreArchivo, contenido, 'utf8', (error) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null);
    });
}

// Aquí comienza el callback hell
leerArchivo('archivo1.txt', (error1, contenido1) => {
    if (error1) {
        console.error('Error al leer archivo1:', error1);
        return;
    }
    
    console.log('Archivo 1 leído correctamente');
    
    // Primer nivel de anidación
    leerArchivo('archivo2.txt', (error2, contenido2) => {
        if (error2) {
            console.error('Error al leer archivo2:', error2);
            return;
        }
        
        console.log('Archivo 2 leído correctamente');
        
        // Segundo nivel de anidación
        const contenidoCombinado = contenido1 + '\n' + contenido2;
        
        escribirArchivo('resultado.txt', contenidoCombinado, (error3) => {
            if (error3) {
                console.error('Error al escribir resultado:', error3);
                return;
            }
            
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

Para probar este ejemplo, necesitas crear dos archivos:
- archivo1.txt con algún contenido
- archivo2.txt con algún contenido
*/ 