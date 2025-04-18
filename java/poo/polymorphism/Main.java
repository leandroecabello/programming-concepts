package poo.polymorphism;

import poo.polymorphism.Vehicle;
import poo.polymorphism.Car;
import poo.polymorphism.Bicycle;

/* *
 * Polimorfismo: Permite usar un mismo método de diferentes maneras, dependiendo del tipo de objeto.
 *  (Permite que una clase se comporte de diferentes formas)
 * 
 * - Aunque Auto y Bicicleta es del tipo Vehiculo, ejecutan el método movimiento de Vehiculo, pero con su propia implementación. 
 * - Porque en tiempo de ejecución se determina el tipo real del objeto.
 *  
 */
public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        Car car = new Car(); // Polymorphism
        Bicycle bicycle = new Bicycle(); // Polymorphism

        vehicle.move(); 
        car.move(); // call the overridden method in the car class
        bicycle.move(); // call the overridden method in the bicycle class
    }
}