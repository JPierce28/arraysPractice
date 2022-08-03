var favoriteFoods = ["Burgers", "Pizza", "Wings", "Steak"];
var luckyNumbers = ["28", "15", "12", "4"];
var questionNumber = 4;
var questionAnswers = Array.apply(null, new Array(questionNumber)).map(function(){return false});

//This will add chicken to the favoriteFoods array;
favoriteFoods.push("Chicken");

//This method will remove the last element in my array of luckyNumbers;
luckyNumbers.pop();

//This method wil change the first element to a different value;
questionAnswers[0] = "True";
console.log(questionAnswers);

console.log("My favorite food is", favoriteFoods[2], "and I can eat", luckyNumbers[1], "in one sitting.");
