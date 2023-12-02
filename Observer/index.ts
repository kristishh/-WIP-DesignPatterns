interface IObservable {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}

class Observable implements IObservable {
  private observers: IObserver[] = [];

  add(observer: IObserver): void {
    if(this.observers.includes(observer)){
      return console.log("Such observer already exists!!");
    }

    this.observers.push(observer);
    console.log("New observer has been added!!");
  }
  

  remove(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log('Such observer does not exist!');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Observer has been removed');
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }

    console.log("All observers have been notified !!");
  }
}

interface IObserver {
  update(observable: IObservable): void;
}

class Observer implements IObserver {
  update(observable: Observable) {
    console.log("Reacting to the event");
  }
}
