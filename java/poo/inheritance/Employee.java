package poo.inheritance;

import poo.encapsulation.Person;

/* *
 * Herencia: Permite que una clase reutilice propiedades y métodos de otra.
 * 
 * - La clase Empleado hereda de la clase Persona.
 * - Reutiliza atributos y métodos, y agrega su propia lógica con el atributo salario por ejemplo.
 * 
 */

public class Employee extends Person {
    private String salary;

    public Employee(String name, String email, double salary) {
        super(name, email);
        this.salary = salary;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}