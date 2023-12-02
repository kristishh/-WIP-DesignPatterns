import ICar from "./ICar";

export default class Tesla implements ICar {
  private name: string;
  private speed = 255

  setModel(name: string) {
    this.name = name
  }

  getModel(): string {
   return this.name 
  }

  topSpeed(): string {
      return `${this.name ?? 'This model'} has a top speed of ${this.speed} km/h`
  }
}
