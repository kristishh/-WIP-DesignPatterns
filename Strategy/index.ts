
class Context {
  private strategy: Strategy;
  
  constructor() {
    this.strategy = this.strategy;
  }
  
  public setStrategy(strategy: Strategy){
    this.strategy = strategy;
  }

  public doAction(): void {
    console.log("Sort data using the Strategy\n");
    
    const result = this.strategy.doSomeAction(['a', 'b', 'c', 'd', 'e']).join(', ')
    
    console.log(result);
    
  }
}
interface Strategy {
  doSomeAction(data: string[]): string[];
}


class ConcreteStrategyA implements Strategy {
  public doSomeAction(data: string[]): string[] {
    return data.reverse();
  }
}

class ConcreteStrategyB implements Strategy {
  public doSomeAction(data: string[]): string[] {
    return data.sort()
  }
}


const context = new Context()

console.log("Reverse Sorting");
context.setStrategy(new ConcreteStrategyA());
context.doAction();


