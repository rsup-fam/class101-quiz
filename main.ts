class Vehicle {
  constructor(
    protected wheels: Wheel[], 
    private fuel: number
  ) {
  }
  public getNumberOfWheels() { return this.wheels.length; }
  public getFuel() {return this.fuel; }
}


export class Wheel {
  private rpm = 0;

  constructor(
    public kind: string
  ) {
  }
  public setNewRPM(r: number) {
    this.rpm = r;
  }
}

class Car extends Vehicle {
  public run() {
    this.wheels.forEach(wheel => wheel.setNewRPM(5))
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

class Bike extends Vehicle {
  public start(){
    this.wheels.forEach(wheel => wheel.setNewRPM(8))
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

// ------------

const road: Vehicle[] = [];
const car = new Car([new Wheel("rubber"),new Wheel("rubber"),new Wheel("rubber"),new Wheel("ribber")], 100);
const bike = new Bike([new Wheel("plastic"), new Wheel("plastic")], 50);

road.push(car);
road.push(bike);
car.run();
bike.start();

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", car.isRoadEmpty(road));
