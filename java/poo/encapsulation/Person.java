package poo.encapsulation;

/* *
 * Encapsulación: Es la capacidad de ocultar los detalles internos de una clase y exponer solo lo necesario.
 * 
 * - Encapsula los atributos ej: nombre y email, para que solo puedan ser accedidos a través de los métodos get y set. 
 * - Esto protege los datos internos de la clase Usuario.
 */

public class Person {
    private String name;
    private String email;

    // Constructor : Inicializa los atributos de la clase
    public Person(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getNombre() {
        return name;
    }

    public void setNombre(String name) {
        this.nombre = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
