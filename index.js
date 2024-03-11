//variables
let numberOfTurns = 10; // number
let userName = "sudoku"; String
let shoppingBasket = ['eggs', 'water', 'socks', 'bottles', 'serviettes'];
let ingredientDetails = {
    dish: "chapati",
    flourBrand: "Exe(light blue)",
    oil: 0.25, //in liters
    salt: 4, //in grams
    waterQuantity:0.5, // in liters
    flourQuantity: 1, //in kg(s)
    time:4, // in hours 
    optimalHeat:24, // in deg centigrade
}; //   object

//making chapati
//procedures
let stepOne = `Boil ${ingredientDetails.waterQuantity} liters`;
let stepTwo =  `Pour ${ingredientDetails.flourQuantity} Kg(s) of ${ingredientDetails.flourBrand} unga`;
let stepThree = `Mix with ${ingredientDetails.salt} mini tablespoons`;
let stepFour = `Gradually mix with hot watter and ${ingredientDetails.oil} liters of oil, untill a non sticky dough is formed`;
let finalStep = `cover your dough and let it settle for ${ingredientDetails.time} hours`;

//print steps to make chapati
console.log(`
1. ${stepOne} \n
2. ${stepTwo} \n
3. ${stepThree} \n
4. ${stepFour} \n
5. ${finalStep} \n
6. Enjoy!!!\n
`)

/**
 * TODO LIST
 * Task:
 * -description
 * -deadline
 * -completionstatus
 */ // object


//todo list
let task1 = {
    title:"washing dishes",
    description:"use ushindi liquid soap and not bar soap",
    deadline: "11/03/2024",
    isComplete: false
};

let task2 = {
    title:"washing car",
    description:"use warm water and liquid soap and not powdered soap",
    deadline: "11/03/2024",
    isComplete: false
};

let todoList = [task1];
//adding an element to the array
todoList.push(task2);

console.log(todoList);
console.log("\n **** My Itinerary ****\n");

//loop to access entities in the array above

for (let i = 0; i <todoList.length; i++) {
    console.log(`
    -Task:${todoList[i].title}\n
    -Approach:${todoList[i].description}\n
    -Deadline:${todoList[i].deadline}\n
    -Status:${todoList[i].isComplete == true?'Complete':'Not complete'}
    `) 
}; 
/***
    ternary operator
    - composed of three parts
    -1st => condition
    2nd => result when condition is true or met
    3rd => result when condition is not met or is false
    
    */

