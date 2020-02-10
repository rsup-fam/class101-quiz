abstract class Vehicle {
  constructor(
    protected wheels: Wheel[], 
    private fuel: number
  ) {
  }
  public getNumberOfWheels() { return this.wheels.length; }
  public getFuel() {return this.fuel; }
  protected setRPM(rpm: number){
    this.wheels.forEach(wheel => wheel.setNewRPM(rpm))
  }
  public abstract run(): void
  public isOnRoad(road: Road) {
    return road.includes(this);
  }
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
    this.setRPM(5)
  }
}

class Bike extends Vehicle {
  public run(){
    this.setRPM(8)
  }
}

class Road extends Array<Vehicle>{
  public isRoadEmpty(){ return this.length === 0 }
  public start(){ this.forEach(vehicle => vehicle.run()) }
}

// ------------

const road = new Road;
const car = new Car([new Wheel("rubber"),new Wheel("rubber"),new Wheel("rubber"),new Wheel("ribber")], 100);
const bike = new Bike([new Wheel("plastic"), new Wheel("plastic")], 50);

road.push(car);
road.push(bike);
road.start()

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", road.isRoadEmpty());
