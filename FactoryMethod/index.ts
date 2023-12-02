import CarFactory from "./CarFactory"

const carFactory = new CarFactory()

const tesla = carFactory.createCar("Tesla")
const audi = carFactory.createCar("Audi")

tesla.topSpeed()
audi.topSpeed()
