const myObj = {
    stuff:"Hello, World",
    greet:"Hi",
    number:75,
    float:10.222,
    arr:["F","a","h","a","d",123],
    obj:{
        first:'Fahad',
        last:'Khan'
    }
}

myObj.addmore = "add some thing new"
myObj['add'] = "add new element"

const person = {
    firstName:'Fahad',
    lastName:'Khan',
    age:18,
    gender:'male',
    details:function(){
        return `Last Name:${this.lastName},First Name${this.firstName}, 
        Age:${this.age}, Gender: ${this.gender}`
    }
}

const myCar = {};
myCar.color = "White" 
myCar.brand = "Suzuki"
myCar.make = "Karachi"
myCar.price = 120000
myCar.year = 2019
myCar.drive = function(){
    alert(` i am drive car in ${this.make}`)
}
myCar.park = function(){
    console.log(`${this.brand} car is parking by ${this.make}`);
}