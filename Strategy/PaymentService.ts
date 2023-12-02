class PaymentService {
  private payment: PaymentMethod

  constructor() {
    this.payment = this.payment
  }

  setPayment(payment: PaymentMethod) {
    this.payment = payment
  }

  pay(): any {
    this.payment.executePayment();
  }
}

interface PaymentMethod {
  executePayment(): void
}

class PayPal implements PaymentMethod {
  public executePayment(): void {
    console.log("You have paid using Paypal")
  }
}

class ApplePay implements PaymentMethod {
  public executePayment(): void {
    console.log("You have paid using Apple Pay");
  }
}

const paymentService = new PaymentService()

paymentService.setPayment(new PayPal())
paymentService.pay()

