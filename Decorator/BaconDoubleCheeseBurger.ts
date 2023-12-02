import IBurger from "./IBurger";

export default class CheeseBurger implements IBurger {
  public getDescription () {
    return "Two 100% beef patties, two rashers of Beechwood smoked bacon, two slices of cheese, onions, pickles, mustard and tomato ketchup, all in a soft bun."
  }

  public getPrice() {
    return 15.99
  }
}
