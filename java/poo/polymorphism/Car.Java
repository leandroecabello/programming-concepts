package poo.polymorphism;

import poo.polymorphism.Vehicle;

public class Car extends Vehicle{
    @Override
    public void move() {
        System.out.println("El auto se está moviendo.");
    }
}