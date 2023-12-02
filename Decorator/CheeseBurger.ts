import IBurger from "./IBurger";

export default class CheeseBurger implements IBurger {
  public getDescription () {
    return "100% beef patty, and cheese; with onions, pickles, mustard and a dollop of tomato ketchup, in a soft bun. "
  }

  public getPrice() {
    return 10.99
  }
}
