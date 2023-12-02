import Audi from "./Audi";
import ICar from "./ICar";
import Tesla from "./Tesla";

class CarFactory {
  public createCar(carType: string): ICar | null {
    switch(carType){
      case "Audi":
        return new Audi()
      case "Tesla":
        return new Tesla()
      default:
        return null
    }
  }
} 

export default CarFactory
