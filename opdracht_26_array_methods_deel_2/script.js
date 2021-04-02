// Opdracht A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]

const findSpiderMan = superheroes.find((item) => {
    return item.name === "Spiderman"
})

console.log(findSpiderMan) 

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Opdracht B

function doubleArrayValues(array) {
    result = [];
    array.forEach(number => {
         result.push(number * 2);
    });
    console.log(result);
};

doubleArrayValues([1, 2, 3]) 
  // result should be [2, 4, 6]

// Opdracht C

let containsNumberBiggerThan10 = ((array) => {
    array.some(function(i) {
        console.log(i > 10);
    });
});

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
// result should be true
containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false

// Opdracht D
console.log("Opdracht D");
console.log("==========");

let isItalyInTheGreat7 = ((array) => {
    array.filter(function(i) {
        console.log(i === "Italy");
    });
});

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) ;
// result should be true

// Opdracht E
console.log("Opdracht E");
console.log("==========");

function tenfold(array) {
    result = [];
    array.forEach(number => {
         result.push(number * 10);
    });
    console.log(result);
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// Opdracht F
console.log("Opdracht F");
console.log("==========");

let isBelow100 = ((array) => {
    array.every(function(i) {
        return (i < 100);
    });
});

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));
// result should be: false

// Opdracht G
console.log("Opdracht G");
console.log("==========");

let bigSum = array.reduce(function(totalSum, i) {
    return totalSum += i;
},0)

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118