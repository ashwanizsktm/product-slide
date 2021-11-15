// 1. code without DI - drawback
// 2. DI as a design pattern. 
// 3. DI as a framework. 


// 1. code without DI - drawback
/*
class Car{
  engine;
  tires;
  constructor(){
    this.engine = new Engine();
    this.tires = new Tires();
  }
}

class Engine{
  constructor(newIngine){
    this.newIngine = newIngine;
  }
}
class Tires{
  constructor() {}
}

var petrol = new Engine('Petrol Engine');
console.log(petrol);
var tires = new Tires('new Tires');
var car1 = new Car();
console.log(car1);
*/
// here we saw the first drawback the moment we modified in the engine class
// the car class which is dependent on engine to build the car will break. 
//2nd drawback it is not suitable for testing. 

// DI is a coding pattern in which a class receives its dependencies from
// external source rahter than creating them itself. 

/*
class Car{
  engine;
  tires;
  constructor(engine, tires){
    this.engine = engine;
    this.tires = tires;
  }
}
var car1 = new Car('petrol Engine', 'MRF Tires');
console.log(car1);
*/

// by doing so, we are now not dependent on other dependencies 
// instead we are creating all dependencies to create 
// a Car in the car itself. 
// In this case Car class doesn't create the 
// dependencies it just consumes them. 

// 2. DI as a design pattern. 

class Car{
  engine;
  tires;
  constructor(engine, tires){
    this.engine = engine;
    this.tires = tires;
  }
}

class Engine{
  constructor(newIngine){
    this.newIngine = newIngine;
  }
}

class Tire{
  constructor(tires) {
    this.tires = tires;
  }
}

var engine = new Engine("Petrol");
var tire = new Tire("CEAT");

var myCar = new Car(engine, tire);
console.log(myCar);

// new we have 2 dependencies to create a car now the 
// key important thing is we can modify the Engine and tire
// the way we want and there will be not effect on Car
// it will be constructed with the evolved tires and engine. 

// c programmis.com


let listItem = document.querySelectorAll(".list-item");
console.log("list item", listItem);


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.forEach((item, i) => {
  // setInterval(() => {
  //   console.log(`the index ${i}`);
  // }, 3000);
  // setTimeout(() => {
  //   console.log(`the index ${i} and the item ${item.className}`);

  // }, 2000);
 
})

var i = 0;
var func = setInterval(function() {
  // console.log(i++);
  if (i >= arr.length) {
    clearInterval(func);
  }
}, 1000);

setInterval(() => {
}, 2000);


// var stories = ['Story1','Story2','Story3'], 
//     i = -1;
// (function f(){
//     i = (i + 1) % stories.length;
//     // document.write(stories[ i ] + '<br/>');
//     console.log(stories[i]);

//     setTimeout(f, 1000);
// })();

var newsArray = [];   // your code puts strings into this array
var curNewsIndex = -1;

var intervalID = setInterval(function() {
    ++curNewsIndex;
    if (curNewsIndex >= newsArray.length) {
        curNewsIndex = 0;
    }
    setTickerNews(newsArray[curNewsIndex]);   // set new news item into the ticker
}, 2000);

function setTickerNews(values){

  let data = ['test1', 'test2','test3'];
   
  for(let i = 0; i < data.length; i++) {
    return values = data[i];
  }
  
  // data.forEach((item, i) => {
  //   console.log(item);
  //   return values = item;
  // })

}