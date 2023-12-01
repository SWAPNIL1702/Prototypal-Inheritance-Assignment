function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function (amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function (amount) {
    this.speed -= amount;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

function Car(brand, model, speed, fuelType, Engine, Power,Transmission) {
    Vehicle.call(this, brand, model, speed, fuelType);

    this.Engine = Engine;
    this.Power = Power;
    this.Transmission = Transmission;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking.`);
};

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);

    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
};

let myCar1 = new Car("Skoda", "Superb", 0, "Petrol", "2.0L Turbocharged", "188 bhp @ 4500 rpm", "7-speed direct speed gearbox (amt)");
let myCar2 = new Car("Hyundai", "Verna SX", 0, "Petrol", "1.8L", "157 bhp @ 4200 rpm", "7-speed manual/automatic");
let myCar3 = new Car("Ford", "Ecosport", 0, "Petrol", "1.5L Diesel Engine", "100 bhp @ 2200 rpm", "5-speed manual gearbox");
let myCar4 = new Car("Tata", "Harrier", 0, "Petrol", "Kryotec 2.0 L Turbocharged Engine", "167 bhp @ 3750 rpm", "6-speed automatic gearbox");
let myAirplane = new Airplane("Airbus", "A330", 0, "Jet Fuel", 2, true);

myCar1.accelerate(325);
myCar1.brake(50);
myCar1.honk();
myCar1.refuel();
console.log(myCar1);

myCar2.accelerate(340);
myCar2.brake(50);
myCar2.honk();
myCar2.refuel();
console.log(myCar2);

myCar3.accelerate(350);
myCar3.brake(50);
myCar3.honk();
myCar3.refuel();
console.log(myCar3);

myCar4.accelerate(333);
myCar4.brake(50);
myCar4.honk();
myCar4.refuel();
console.log(myCar4)

myAirplane.accelerate(200);
myAirplane.takeOff();
myAirplane.refuel();
console.log(myAirplane)