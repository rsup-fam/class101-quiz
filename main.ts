import Vehicle from './Vehicle';

export class Wheel {
  public kind: string;
  public rpm: number = 0;

  constructor(kind) { this.kind = kind; }

  public setNewRPM(r: number) {
    this.rpm = r;
  }

  
}

class Car extends Vehicle {
  // 시동을 켠다
  public run() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 5;
    }
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

class Bike extends Vehicle {
  // 페달을 밟는다
  public start(){
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 8;
    }
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

// ------------

const road: Vehicle[] = [];

const car = new Car(4, [new Wheel("rubber"),new Wheel("rubber"),new Wheel("rubber"),new Wheel("ribber")], 100);

const bike = new Bike(2, [new Wheel("plastic"), new Wheel("plastic")], 50);

road.push(car);
road.push(bike);
car.run();
bike.start();

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", car.isRoadEmpty(road));
