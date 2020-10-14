import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */


const teams2014 = fifaData.filter(item => item['Stage'] === 'Final' && item['Year'] === 2014);

// console.log(teams2014);




// (a) Home Team name for 2014 world cup final

    // console.log(teams2014[0]['Home Team Name']);

// (b) Away Team name for 2014 world cup final

    // console.log(teams2014[0]['Away Team Name']);

// (c) Home Team goals for 2014 world cup final

    // console.log(teams2014[0]['Home Team Goals']);

// (d) Away Team goals for 2014 world cup final

    // console.log(teams2014[0]['Away Team Goals']);

// (e) Winner of 2014 world cup final */

    // console.log(teams2014[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log('****** TASK 2 ******');

function getFinals(array) {

    const finalsTeams = array.filter(object => object['Stage'] === 'Final')

    return (finalsTeams);

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log('****** TASK 3 ******');

function getYears(callback, array) {

    let years = callback(array).map( object => object['Year'])

    return(years);
};

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

console.log('****** TASK 4 ******');

function getWinners(callback, array) {

    let winner = callback(array).filter( object => object['Home Team Goals'] > object['Away Team Goals'] || object['Home Team Goals'] < object['Away Team Goals'])
    
    // let winner = callback(array).filter( function(object){  
    // object['Home Team Goals'] > object['Away Team Goals'] || object['Away Team Goals'] > object['Home Team Goals']
    // })

    let names = winner.map( object => object['Home Team Name'] || object['Away Team Name'] )
    
    // console.log(names);
    return(names);

};

console.log( getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

console.log('****** TASK 5 ******');

function getWinnersByYear(callback1, callback2, callback3, array) {



    let Winners = callback1( callback3, array)
    // console.log(Winners);

    let Years = callback2( callback3, array)
    // console.log(Years);

    // let stringArray = {
    //     Winners : Winners ,
    //     Years : Years
    // }

    // for ( let index in Winners ) {
    //     stringArray.Winners.push(Winners[index])
    // }
    
    // console.log(stringArray.Winners);




    // console.log(stringArray);

    for ( let index in Winners ) {
        console.log(`In ${Years[index]}, ${Winners[index]} won the world cup!`);
    }

    // let string = `In ${stringArray.Years}, ${stringArray.Winners} won the world cup!`

    // return string

};

console.log( getWinnersByYear(getWinners, getYears, getFinals, fifaData) );

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

console.log('****** TASK 6 ******');

function getAverageGoals( array, data ) {

    home 

    let homeAverage = 0;

    let awayAverage = 0;

    const average = array.reduce( (accumulator, currentValue) => {
        return accumulator + currentValue / array
    },0);

};

getAverageGoals( fifaData);

















/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
