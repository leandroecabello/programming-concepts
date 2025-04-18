package poo.abstraction.interfaces;

import poo.abstraction.interfaces.Pay;
import poo.abstraction.interfaces.PaymentCard;
import poo.abstraction.interfaces.PaymentCash;

/* *
 * Abstraction: Oculta los detalles de implementación y expone solo lo necesario
 * 
 * - La interfaz Pay para definir el comportamiento general de un pago. Las clases PagoTarjeta y PagoEfectivo implementan este comportamiento de formas diferentes.
 */

 public class Main {
    public static void main(String[] args) {
        Pay paymentCash = new PaymentCash();
        Pay paymentCard = new PaymentCard();

        paymentCash.payProcess(100);
        paymentCard.payProcess(200);
    }
 }