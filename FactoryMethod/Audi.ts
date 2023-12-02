import ICar from "./ICar";

export default class Audi implements ICar {
  private name: string;
  private speed = 265

  setModel(name: string): void {
    this.name = name
  }

  getModel(): string {
    return this.name
  }

  topSpeed(): string {
    return `${this.name ?? 'This model'} has a top speed of ${this.speed} km/h`
  }
}
