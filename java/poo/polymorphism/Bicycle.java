package poo.polymorphism;

import poo.polymorphism.Vehicle;

public class Bicycle extends Vehicle{
    @Override
    public void move() {
        System.out.println("La bicicleta se está moviendo.");
    }
}