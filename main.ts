class Vehicle {
  constructor(
    private wheels: Wheel[], 
    private fuel: number,
    private rpm: number 
  ) {
  }
  public getNumberOfWheels() { 
    return this.wheels.length; 
  }
  public getFuel() {
    return this.fuel; 
  }
  public run(){
    this.wheels.forEach(wheel => wheel.setNewRPM(this.rpm));
  }
  public isOnRoad(road: Road) {
    return road.includes(this);
  }
  static newCar({ wheels = [new Wheel("rubber"), new Wheel("rubber"), new Wheel("rubber"), new Wheel("ribber")], fuel = 100 } = {}){
    return new Vehicle(wheels, fuel, 5);
  }
  static newBike({ wheels = [new Wheel("plastic"), new Wheel("plastic")], fuel = 50 } = {}){
    return new Vehicle(wheels, fuel, 8);
  }
}

class Wheel {
  private rpm = 0;
  constructor(
    public kind: string
  ) {
  }
  public setNewRPM(r: number) {
    this.rpm = r;
  }
}

class Road extends Array<Vehicle>{
  public isEmpty(){ 
    return this.length === 0;
  }
  public start(){ 
    this.forEach(vehicle => vehicle.run()) 
  }
}

// ------------

const road = new Road;
road.push(Vehicle.newCar());
road.push(Vehicle.newBike());
road.start()

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", road.isEmpty());
