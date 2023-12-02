import IBurger from "./IBurger";

export default class CheeseBurger implements IBurger {
  public getDescription () {
    return "two 100% beef patties with cheese, onions, pickles, mustard and a dollop of tomato ketchup, all in a perfectly soft bun."
  }

  public getPrice() {
    return 12.99
  }
}
