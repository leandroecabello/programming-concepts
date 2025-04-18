package java.poo.abstraction;

import java.poo.abstraction.Pay;

public class PaymentCard implements Pay {

    @Override
    public void payProcess(double amount) {
        System.out.println("Procesando pago con tarjeta por " + monto);
    }
}