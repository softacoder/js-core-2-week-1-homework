// Define an object. Complete the following code, assigning objects to the variables salem and ijeoma so that the output of the program is as below. Don't change the function!

function logInformationAbout(person) {
  let age = 2023 - person.yearOfBirth;

let salem = {
  firstName: 'Salem',
  countryOfOrigin: 'Sudan',
  yearOfBirth: 1993,
};

let ijeoma = {
  firstName: 'Ijeoma',
  countryOfOrigin: 'England',
  yearOfBirth: 2001,
};

  console.log(
    `${person.firstName} is from ${person.countryOfOrigin}`,
    `and will be ${age} years old in 2023`
  );
}

//     Predict, evaluate and explain the following expressions in the node REPL

// let stock = {
//   name: "aapl",
//   lastClosingPrice: 171.45,
//   lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
// };

// stock.name;  

It calls "aapl". The expression accesses the name property of the stock object and returns "aapl". "aapl" is the value.

// stock["name"];

Also here you get "aapl". The expression uses brackets to access the name property of the stock object and returns "aapl". "aapl" is the valu. 
This notation is useful when the property name is stored in a variable and also when the name contains characters that arent valid in dot notation.

// stock.lastClosingPrice * 100;
Th expression multiplies the value of the lastClosingPrice property of the stock object, which is 171.45, by 100 and returns 17145.

// stock.lastFiveDaysClosingPrices[1];
The expression accesses the second element in the lastFiveDaysClosingPrices array of the stock object (the array indices start at 0) and returns 176.28.
// stock.name = "AAPL";
lastClosingPrice: 171.45, lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45] }
The expression assigns the value "AAPL" to the name property of the stock object, overwriting the previous value of "aapl". Then returns the entire stock object with the updated name property.

// stock;
 The expression returns the entire stock object, including the updated name property.


//  2. Add a field (a key + value pair) to the stock object, describing it's change over the last 5 days.
let stock = {
  name: "aapl",
  lastClosingPrice: 172.99,
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
};

stock.changeInLastFiveDays = stock.lastClosingPrice - stock.lastFiveDaysClosingPrices[4];

console.log(
  "In the last 5 days, the stock changed by",
  stock.changeInLastFiveDays
);

// 3.1. Write a program that prints out to the console information from the following object

// Solution below
let uk = {
  name: "The United Kingdom of Great Britain and Northern Ireland",
  shortName: "The UK",
  capitalCity: {
    name: "London",
    population: 9648000,
  },
};

console.log(`Name: ${uk.name}`);
console.log(`Short name: ${uk.shortName}`);
console.log(`Capital city: ${uk.capitalCity.name}`);
console.log(`Population of capital city: ${uk.capitalCity.population}`);

// it should print:
Name: The United Kingdom of Great Britain and Northern Ireland
Short name: The UK
Capital city: London
Population of capital city: 9648000



// The capital of The UK is London. London has a population of 9648000


// 3.2 Complete the following program so that it prints out information about the stocks that went down in the past 5 days.
// Most of the code is already written. You should only modify the functions isStockPriceDecreasing and getMessage.

const stocks = [
{
name: "aapl",
lastClosingPrice: 172.99,
lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
},
{
name: "msft",
lastClosingPrice: 327.29,
lastFiveDaysClosingPrices: [340.69, 342.45, 334.69, 333.2, 327.29],
},
{
name: "amzn",
lastClosingPrice: 3408.34,
lastFiveDaysClosingPrices: [3384.44, 3393.39, 3421.37, 3420.74, 3408.34],
},
{
name: "googl",
lastClosingPrice: 2869.45,
lastFiveDaysClosingPrices: [2951.88, 2958.13, 2938.33, 2928.3, 2869.45],
},
{
name: "tsla",
lastClosingPrice: 938.53,
lastFiveDaysClosingPrices: [1101.3, 1093.94, 1067.0, 1008.87, 938.53],
},
];

function getMessage(stock) {
return ${stock.name} went down in price. Last closing price: ${stock.lastClosingPrice}.;
}

function isStockPriceDecreasing(stock) {
const lastPrices = stock.lastFiveDaysClosingPrices.slice(0, 5);
const maxPrice = Math.max(...lastPrices);
const minPrice = Math.min(...lastPrices);
return maxPrice > minPrice && stock.lastClosingPrice < minPrice;
}

const decreasingStocks = stocks.filter(isStockPriceDecreasing);
const messages = decreasingStocks.map(getMessage);
console.log("Stocks that decreased in price over the last 5 days:");
for (const message of messages) {
console.log(message);
}


// Complete the lastClosingPrice method of the stock object so that it returns the last element of the lastFiveDaysClosingPrices array. This practice exercise is optional.

let stock = {
  name: "aapl",
  lastClosingPrice: function () {
    return this.lastFiveDaysClosingPrices[4];
  },
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 173.99],
};

console.log(stock.lastClosingPrice()); // Output: 173.99



//    Add a test to your solution to 1-weather-report.js in JavaScript-Core-1-Coursework-Week3. This test should check that when 3 city names are passed as an argument to the getTemperatureReport function, the returned array should be of length 3.

// The assertion portion of such a test would look like this: expect(getTemperatureReport(usersCities).length).toEqual(3);

describe("getTemperatureReport", () => {
  it("returns an array of length 3 when given an array of 3 city names", () => {
    const usersCities = ["New York", "London", "Tokyo"];
    const result = getTemperatureReport(usersCities);
    expect(result.length).toEqual(3);
  });
});





