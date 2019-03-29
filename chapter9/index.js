var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement.
var c = 12; //Declare variable c and assign it the value of 12 in one statement.

console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c

a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string";  //Reassign a new value of type string to a.
console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(a); //Prints out true.

var d;
console.log(d); //This will print out the value undefined.
a = null;
console.log(a); //This will print out the value null.

a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a + b; //Add value in a and b and put the result in variable c.
console.log(c); //This should print out 30
console.log(b - a); //Subtract a value from b value; displays 10 in console.
console.log(b/a); //Divide b value by a value; displays 2 in console.
console.log(a*b); //Multiply a value by b value; displays 200 in console.
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console.
console.log(a**2); //a value raised to power 2; displays 100 in console.
a++; //Increment a value.
console.log(a); //Displays 11 in console.
b--; //Increment b value.
console.log(b); //Displays 19 in console.

firstName = "Pius";
lastName = "Onobhayedo";
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName
console.log(fullName); //This should output the full name Pius Onobhayedo.

a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false.
console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No"

console.log(5 << 1); //Equivalent of 5 * 2
console.log(5 <<2); //Equivalent of 5 * 4
console.log(5 <<3); //Equivalent of 5 * 8
console.log(40 >> 1); //Equivalent of 40 / 2
console.log(40 >>2); //Equivalent of 40 / 4
console.log(40 >>3); //Equivalent of 40 / 8

console.log(typeof  "Pius Onobhayedo");  //Returns the value "string"
console.log(typeof false);  //Returns the value "boolean"
console.log(typeof (10 + 10));  //Returns the value "number"
console.log(typeof 33);  //Returns the value "number"

var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge){
console.log("Not eligible to vote");
}else{
console.log("Eligible to vote");
}

var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
case 1:
console.log("Sunday");
break;
case 2:
console.log("Monday");
break;
case 3:
console.log("Tuesday");
break;
case 4:
console.log("Wednesday");
break;
case 5:
console.log("Thursday");
break;
case 6:
console.log("Friday");
break;
case 7:
console.log("Saturday");
break;
default:
console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

var ageRange = "below 13";
switch (ageRange){
case "below 1":
console.log("Infant");
break;
case "below 13":
console.log("Pre-teen");
break;
case "below 20":
console.log("Teenager");
break;
default:
console.log("Adult")
}//This switch statement should print out Pre-teen.

for (var c = 1; c < 11; c++){
    console.log(c);
}

for (var c = 1; c < 11; c++){
    if(c == 7) break;    
    console.log(c);
}

for (var c = 1; c < 11; c++){
    if(c == 7) continue;
    console.log(c);
}

var n = 0;
while(n != 5){
    n = Math.floor((Math.random() * 10));
    console.log(n)
}

var x = 0;
do{
    x+= 1;
    console.log(x)
}while(x < 10)

var readlineSync = require('readline-sync'); //make the module just installed available for use in our program
var answer; //declare variable named answer;
do{
//use question() function to read input and assign the value to answer
answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
console.log('You asked me to '+ answer)
}while(answer != 'exit')

var readline = require('readline'); //load the readline module into the runtime environment

//Next, create the input/output interface as required by readline module.
var readlineAsync = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//Next, declare and define a function named recursiveReadLineAsync
function recursiveReadLineAsync()  {
readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){
console.log('You asked me to ' + answer)
if (answer == 'exit') //Condition for terminating further self call
  return readlineAsync.close(); //quit the function if answer == exit 
recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
});
};
//Finally, invoke the defined variable to start the recursion
recursiveReadLineAsync();

//By direct declaration
function addTwoNumbersA(number1, number2){
    return number1 + number2; //Add the two numbers passed when function is called
}
    
//By expression
var addTwoNumbersB = function(number1, number2){
    return number1 + number2;
}

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50).
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

//Define a function that receives a number to be squared
function square(number){
    number = number**2;
    return number;
}
var number = 20; //Declare variable that holds number to be squared
var numberSquared = square(number); //Pass number (by value) to the square() function 
console.log(numberSquared); //The function returns 400
console.log(number); //The value of number variable outside the function remains 20

function multiplier(){
    var product = 1;
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30));//Prints 300 to the console
console.log(multiplier(10,30,10));//Prints 3000 to the console

var accumulatedTotal = 0; //Declare and initialize a global variable.
//Declare function named sum that expects two parameters named number1 and number2.
function sum(number1, number2){
    //The variables named total, number1 and number2 below are function scope variables.
    //They are not visible from outside the function. 
    var total = number1 + number2;
    //Update the global variable named accumulatedTotal.
    //Even though not declared within the function, it is visible.
    accumulatedTotal = accumulatedTotal + total; 
    return total;
}
console.log(sum(2,3)); //Call sum() function and print to console the total returned.
console.log(sum(10,20)); //Call sum() function and print to console the total returned.
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35

//Declare a variable named vehicles and assign an array literal that contains three elements
var vehicles = ["car","lorry","trailer"]; 
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]

//Declare a variable named basket and assign an empty array literal.
var basket = [ ];
console.log(basket); //Prints out the array literal [ ] 

//Declare a variable named myExpressions and assign an array literal which contains expressions.
var myExpressions = ["car", 2+3, 10, true];  //The second element includes a plus operation
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]

console.log(myExpressions[0]); //Prints out 'car'
console.log(myExpressions[1]); //Prints out 5
console.log(myExpressions[2]); //Prints out 10
console.log(myExpressions[3]); //Prints out true

myExpressions[3] = false; //Change the expression at position 3.
console.log(myExpressions[3]); //Prints out false

var myExpressions = ["car", , 10, true];  //The second element (i.e. index position 1), is undefined
console.log(myExpressions[1]); //Prints out undefined

var myObject = {
    name: {
        firstName : "Pius",
        surname: "Onobhayedo"
    },
    expertise: "Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
}

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.

console.log(myObject.expertise); //Prints out Software design and development
console.log(myObject['expertise']); //Also prints out Software design and development

console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]

console.log(myObject.isRetired); //Prints out false
console.log(myObject['isRetired']); //Also prints out false

console.log(myObject.favouriteCombination); //Prints out 6
console.log(myObject['favouriteCombination']); //Also prints out 6

//Accessing nested objects
console.log(myObject.name.firstName); //Prints out Pius.
console.log(myObject['name']['firstName']); //Also prints out Pius.

myObject.favouriteCombination = 9 + 9;
console.log(myObject.favouriteCombination); //Prints out 18

myObject.newProperty = "another property added"; //Add a new property named newProperty
console.log(myObject); //Prints out the string, another property added

var phones = {
    make: 'Samsung',
    model: 'S7',
    cost: 500
}
console.log('make' in phones); //Prints out true
delete phones.make; //Delete property phones.make
console.log('make' in phones); //Prints out false

function Person(firstName, lastName, height, weight){
    //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
}

var person1 = new Person("Pius", "Onobhayedo",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)

console.log (person1.firstName); //Prints out Pius
console.log (person1.getFullName()); //Prints out Pius Onobhayedo
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph

console.log(person1.constructor);

console.log(person1.prototype);
console.log(Person.prototype);

console.log(Person.constructor);

Person.prototype.complexion = "dark brown";

person1.complexion = "light brown"; //Specify complexion value for object instance, person1.
console.log(person1.complexion);  //Prints out light brown.
console.log(person2.complexion); //Prints out the default value for complexion i.e. dark brown.

Person.prototype.getComplexion = function ( ){
    return this.complexion
}
    
Person.prototype.setComplexion = function (complexion){
    this.complexion = complexion;
}
person1.setComplexion('black'); //Use the method just added to blueprint person
console.log(person1.getComplexion( )); //Prints out black.

console.log(Math.E); //The static property E holds the value of Euler’s number i.e. 2.718281828459045.
console.log(Math.PI); //The static property PI holds the value of Pi i.e. 3.141592653589793.
console.log(Math.cos(45)); //Method returns the cosine of number passed as argument.
console.log(Math.abs(-30)); //Method returns the absolute number equivalent of argument.
console.log(Math.random()); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1.
console.log(Math.max(10,5,60)); //Method returns the maximum number among the arguments passed. 
console.log(Math.min(10,5,60)); //Method returns the minimum number among the arguments passed.

var today = new Date(); //Get today’s date
//Instantiate new Date passing year, month-index and day in numbers
var birthday = new Date(1980,4,30); //Note that month index is 0-11 for Jan-Dec
//Instantiate new Date passing equivalent datetime string with date same as above
var birthday = new Date('May 30, 1980 19:00:00');
//Instantiate new Date passing date and time using numbers
var birthday = new Date(1980, 4, 30, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers

//Below is a simple function that calculates present age
function calculateAge(birthday){
    var today = new Date();
    var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time
    //Get the equivalent year for difference
    var yearEquivalent = new Date(difference).getFullYear();
    //Subtract 1970 to get age.
    return yearEquivalent - 1970;
}

//Invoke function calculateAge()
var birthday = new Date (1989,12,30);
console.log(calculateAge(birthday)); //Prints out birthday

function sleep(milliseconds) {
    console.log("Going to sleep for " + milliseconds + " milliseconds...")
    var begin = new Date().getTime();
    do{
        nextTime = new Date().getTime();
    }while(nextTime - begin < milliseconds)
    console.log("Sleep over");
}
//Call sleep
sleep(3000);

var re = new RegExp('xyz'); //'xyz' is the pattern to be matched.

var re = /xyz/;

var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
//Simply check if pattern is in searchString using test() method.
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString.
//Find index position using exec() method
console.log(re.exec(searchString)); //Returns an array containing pattern, index and input as shown in comment below
/*[ 'xyz',
  index: 7,
  input: 'Locate xyz pattern in this text. The xyz could be in XYZ location' ]*/
//Find index position using search() method of String object passing the pattern as argument.
console.log(searchString.search(re)); //Returns index position.

var re = new RegExp('xyz','gi'); //'xyz' is the pattern to be matched; g and i options set.

var re = /xyz/gi;

var result;
while((result = re.exec(searchString))!= null){ //loop until no more match
    //display the index found and the string
    console.log("Index position " + result.index + " contains " + result[0]);
}

var personJSON1 =' { \
    "firstName":"Pius", \
    "lastName": "Onobhayedo", \
    "complexion": "brown", \
    "heightInMeters": 1.7,\
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
}'

var personJSON2 =' { \
    "names":{ \
        "firstName":"Pius", \
        "lastName": "Onobhayedo" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
} '

//Convert JSON string named personJSON1 to object equivalent
var p1Object = JSON.parse(personJSON1);
console.log(p1Object);

//Convert JSON string named personJSON2 to object equivalent
var p2Object = JSON.parse(personJSON2);
console.log(p2Object);

//dot notation approach to accessing object properties
console.log(p1Object.complexion); //Returns brown 
console.log(p1Object.degrees[0]); //Returns BSc
console.log(p2Object.names.firstName); //Returns Pius

//Array style approach to accessing object properties
console.log(p1Object["complexion"]); //Also returns brown
console.log(p1Object["degrees"][0]); //Also returns BSc
console.log(p2Object["names"]["firstName"]); //Also returns Pius

var x = 'This is a string literal';
var y = new String ('This is a String object');

console.log(x); //This will output 'This is a string literal'
console.log(y); //This will output '[String: 'This is a String object']'

console.log(y.toString()); //This will output 'This is a string object'

var z = x + y;
console.log (z); //This will output 'This is a string literalThis is a string object'. Notice that there is no need to invoke toString() method.

console.log(x.length); //This should print out the length of the string 'This is a string literal'

console.log(x.constructor); //This should output [Function: String]

var firstName = 'Pius';
var lastname = 'Onobhayedo';
var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name
console.log(fullName); //This should output the string 'Pius Onobhayedo'

var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above.
console.log(fullName); //This should also output the string 'Pius Onobhayedo'

console.log(fullName.includes('Pius')); //Outputs true

var x = 'Let us search this text for pius. If Pius is found, ...';
var regex = /pius/gi; //All occurences of Pius independent of case

console.log(x.search(regex)); // This will return only the index of the first occurrence of condition specified in the regular expression

var searchTerm = 'pius';
var matchIndex;
var startIndex = 0; //start from the beginning
while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
    console.log(matchIndex); //Output the index of match
    startIndex = matchIndex + 1; //change search start position to beyond the last match index
}

//To return all occurences, you can use the RegExp exec method instead
var match;
while((match = regex.exec(x))!= null){ //loop until no more match
    //Below should display the index found and the string. Expected output are:
    //Index position 28 contains pius
    //Index position 37 contains Pius
    console.log("Index position " + match.index + " contains " + match[0]);
    
}

var x = 'Let us search this text for pius. If Pius is found, …';
var regex = /pius/gi; //All occurences of Pius independent of case
var y = x.replace(regex,'John'); //Replaces any match found with 'John'
console.log(y); // This should output the string 'Let us search this text for John. If John is found, ...'
console.log(x); // This remains 'Let us search this text for pius. If Pius is found, …'

var x = 'Let us search this text for pius. If Pius is found, …';
var y = x.slice(34); //Counting from the beginning of the string (i.e. 0 index position), this will extract text from position 34 to the end.
console.log(y); //Expected to output the string 'If Pius is found, …'

var y = x.slice(28,32);//Counting from index position 28, extract text up to position 32
console.log(y); // This should output the string 'pius'

var y = x.slice(-1); //Extract from the last position.
console.log(y); // Should return the string '...'

var y = x.slice(-16, -12); //Extract from the 16th position from the rear to the 12th position from the rear
console.log(y); //Should output the string 'Pius'

var y = x.slice(-16);// Extract the letters from position 16 from the rear
console.log(y);//This should return 'Pius is found, …'


//Create and initialize an array with 5 elements
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];

//Use the object's length property to return the number of elements in the array. This should return 5.
console.log(languages.length);

//Loop through array using forEach method and print each element in the array. The forEach() method is passed a function as argument. The function in turn is passed a parameter that will capture each element in the array at runtime. Within that function, each element can thus be referenced as shown. In this case, we simply log the element’s value to the console.
languages.forEach(function(element) {
    console.log(element);
});

//Loop through array using forEach method and print each element’s position (index+1) concatenated with a dot, space and element name. Notice here that I have used variable named language to capture element name inside the function passed to the method instead of the name element. The choice is yours.
languages.forEach(function(language, index) {
    var output = index+1 + '. ' + language;
    console.log(output);
});

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
console.log(languages.indexOf('JavaScript')); //This should output 1

//To return all occurrences, loop, indicating startIndex each time as we did for strings
var searchTerm = 'JavaScript';
var matchIndex;
var startIndex = 0; //start from the beginning
while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
    console.log(matchIndex); //Output the index of match
    startIndex = matchIndex + 1; //change search start position to beyond the last match index
}
//The above while loop should output 1 and 5.

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
languages.push('PHP');
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript', 'PHP']

languages.pop();
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the last element, 'PHP'.

languages.shift();
console.log(languages); //This should print out ['JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the first element, 'Python'.

languages.unshift('Python');
console.log(languages); //This should print out ['Python','JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having added 'Python' to the beginning of the array.

var mynumbers = [10, 20, 30, 40, 50];
var mydoublednumbers = mynumbers.map(function(number){
    return number * 2;
})
console.log(mydoublednumbers); //This should output [20, 40, 60, 80, 100]

var mynumbers = [1, 2, 3, 4, 5, 6];
var myevennumbers = mynumbers.filter(function(number){
    return number % 2 == 0; //Test if the number is even
})
console.log(myevennumbers); //This should output [2, 4, 6]

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
    return accumulatedValue + number;
})
console.log(reduceOutput);//This should output 55

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
    return accumulatedValue + number;
}, 100)
console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Define the reducer function
var reducer = function(accumulatedValue, number){
    return accumulatedValue + number;
}
//Pass the reducer function to reduce() method
var reduceOutput = mynumbers.reduce(reducer, 100)
console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array

a = 10; //Allocate a number literal to variable
b = Number('10'); //The function converts the string '10' to the number equivalent
c = new Number(10); //Instantiates a new Number object.

d = a.valueOf(); //This is superfluous. d = a is enough
e = b.valueOf(); //This is superfluous. e = b is enough
f = c.valueOf(); //This is necessary for f to hold only the value

console.log(a); //This should output 10
console.log(b); //This should output 10
console.log(c); //This should output [Number: 10]

console.log(d); //This should output 10
console.log(e); //This should output 10
console.log(f); //This should output 10

console.log(Number( '123Pius'));
console.log(parseInt( '123Pius'));


try{
    console.output('Provoking an error by calling a non-existent function');
}catch(error){
    console.log(error.name); //Outputs 'TypeError'
    console.log (error.message); //Outputs the message 'console.output is not a function'
}

function multiplier(){
    var product = 1;
    if (arguments.length < 1){
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}

//Call function without arguments. Here error will be caught and message output to console
try{
    console.log(multiplier())
}catch(error){
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1'
}

//Call function with arguments. No error here.
try{
    console.log(multiplier(2,3)); //This will output 6
}catch(error){
    console.log(error.message);
}