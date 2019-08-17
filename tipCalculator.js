function tipCalculator(amount) {
    //calculate tip based on price
    if (amount < 50) {
        console.log(amount * 0.2);
    }else if (amount > 50) {
        console.log(amount * 0.15);
    }else if (amount > 200) {
        console.log(amount * 0.1);
    }
}

//Insert the amount in the (*) to use the tipCalculator funtion. 
tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

//Arrays containing the tip's and total after tips.
var tipAmount = [18.59, 9.60, 40.19]; // Tips
var sumTotal = [tipAmount[0] + 124, tipAmount[1] + 48, tipAmount[2] + 268]; // Total

console.log(sumTotal);