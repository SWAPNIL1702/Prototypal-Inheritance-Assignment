// *----------------------Using Constructor Functions--------------------------* //

// Defining the main constructor function for Automobile
function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Adding method to the main constructor function
  Automobile.prototype.displayInfo = function () {
    console.log(`${this.year} ${this.make} ${this.model}`);
  };
  
  // Defining a constructor function for FourWheeler (inheriting from Automobile)
  function FourWheeler(make, model, year, numDoors) {

    // Calling the parent constructor using call method
    Automobile.call(this, make, model, year);
  
    // Adding properties that are specific to FourWheeler
    this.numDoors = numDoors;
  }
  
  // Inheriting prototype methods from Automobile
  FourWheeler.prototype = Object.create(Automobile.prototype);
  
  // Creating an example of FourWheeler
  const theCar = new FourWheeler('Honda', 'Amaze', 2021, 4);
  
  // Accessing properties and methods
  console.log(theCar.make);
  console.log(theCar.displayInfo());


  // *--------------------------Using Object.create()--------------------------* //

  // Defining the main object for Automobile
const automobilePrototype = {
    displayInfo: function () {
      console.log(`${this.year} ${this.make} ${this.model}`);
    }
  };
  
  // Creating a factory function for creating Automobile example
  function createAutomobile(make, model, year) {
    const automobile = Object.create(automobilePrototype);
    automobile.make = make;
    automobile.model = model;
    automobile.year = year;
    return automobile;
  }
  
  // Creating a factory function for creating FourWheeler example
  function createFourWheeler(make, model, year, numDoors) {
    const fourWheeler = createAutomobile(make, model, year);
    fourWheeler.numDoors = numDoors;
    return fourWheeler;
  }
  
  // Creating an example of FourWheeler
  const theCar = createFourWheeler('Skoda', 'Slavia', 2022, 4);
  
  // Accessing properties and methods
  console.log(theCar.make);
  console.log(theCar.displayInfo());
  
  