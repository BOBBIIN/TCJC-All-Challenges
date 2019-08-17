//results from past 3 games
var teamJohn = 89 + 120 + 103;
var teamMike = 116 + 94 + 123;

//calculate team avrage score based on there points devided by 3(matches played)
var tj = teamJohn / 3;
var tm = teamMike / 3;

// Decide wheter Mike's or John's team has the best avrage score
if (tj > tm) {
    console.log('John\'s', 'team has the best avrage score', '(',tj,')');
}else {
    console.log('Mike\'s', 'team has the best avrage score', '(',tm,')');
};