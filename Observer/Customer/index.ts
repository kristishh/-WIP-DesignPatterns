interface Subject  {
  add(observer: Observer): void;
  remove(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class Product implements Subject {
  private observers: Observer[] = [];

  add(observer: Observer): void {
    this.observers.push(observer);
  }

  remove(observer: Observer): void {
    const removeIndex = this.observers.findIndex(obs => observer === obs);
    if (removeIndex !== -1) {
      this.observers.splice(removeIndex, 1)
    }
  }

  notify(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }
}

class Customer implements Observer {
  update(subject: Subject){
    console.log("A product you're following is back in stock!");
    
  }
}

const product = new Product();
const me = new Customer();
product.add(me);
product.notify()
