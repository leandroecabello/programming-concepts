package java.poo.abstraction;

import java.poo.abstraction.Pay;

public class PaymentCash implements Pay {
    @Override
    public void payProcess(double amount) {
        System.out.println("Procesando pago en efectivo por " + amount);
    }
}