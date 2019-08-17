var markHeight = 186; //height in meters
var johnHeight = 198; //height in meters

var markMass = 86; //Weight in kilos
var johnMass = 120;  //Weight in kilos

var markBmi = markMass / (markHeight * markHeight); //calculates Mark's BMI
//console.log(markBmi);
var johnBmi = johnMass / (johnHeight * johnHeight); //calculates John's BMI
//console.log(johnBmi);

var highestBmi = markBmi > johnBmi;
//console.log(highestBmi);

console.log('Is Marks BMI higher than Johns?', 'Answer :', highestBmi );