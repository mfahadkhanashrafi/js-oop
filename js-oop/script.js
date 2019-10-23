function  BluePrint() {
    this.stuff = "yes";
    this.greet = "hello"
}

const myObj1 = new BluePrint();
const myObj2 = new BluePrint();

function Car(color,brand,make,price,year,owner) {
    this.color = color;
    this.brand = brand;
    this.make = make;
    this.price = price;
    this.year = year;
    this.owner = owner;
    this.park = function () {
        console.log(`Parking the ${this.brand}`);
    };
    this.drive = function () {
        console.log(`I am driving my ${this.year} ${this.brand}, vroom vroom`);
    };
    this.sell = function () {
        console.log(`I want to sell my ${this.brand} for the least 
        ${this.price*0.9} since i paid ${this.price}`);
    }
}

const honda = new Car('Black','Honda','Civic',5000,2018,'Fahad');
const toyota = new Car('Red','Toyota','Corola',15000,2020,'Ishaq');