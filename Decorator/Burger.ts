import IBurger from "./IBurger";

export default abstract class Burger implements IBurger {
  public getDescription (): string {
    return "A burger is a patty of ground meet between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor."
  }
  
  public getPrice (): number {
    return 8.99
  }
}
