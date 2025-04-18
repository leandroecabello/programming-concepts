package java.poo.abstraction.interfaces;

public abstract class Pay {
    public abstract void payProcess(double amount);

    public void payProcess(double amount, String currency) {
        System.out.println("Procesando pago por $" + amount);
    }
}