
/*****************************************
//1. REVIEW OF VAR DECLARATION
//ES5: we use to declare variables using var
 var x = 1; // GLOBAL scoped

 function add1(y){
    var x = 2;    //FUNCTION SCOPED
    return y + x;
 }

 console.log(add1(3));  // returns 5

 function add2(y){
    return y + x;
 }

 window.console.log(add2(3));

 //They were also hoisted
 //NOTE: ALL variables declared using var are hoisted and set to undefined at the beginning before the execution  of code
 console.log(z);  //undefined
 var z = 1;

 //After declaration it is inititized too. So now if u console,u get the value
 console.log(z);

 *************************************/

 /**************************************
//2. LET DECLARATION
//ES6

let x = 1; // redeclaration throws an error

//SCOPE
function add(y){
    return y + x;
}
console.log(add(3));
//so let variables can be accessed from inside functions if declared
// in their outer environment just like var

function add2(y){
    let x = 2;
    return y + x;
}
console.log(add2(3));  // returns 5

//Hoisting
//NOTE: variables declared using 'let' are not hoisted at beginning unlike var
//So, if u try to access a variable before declaration, u get error that it is not declared
//But, if u access the variable before its declaration and later u declare it by var, the variable
//will be hoisted and it will not throw an error, rather say 'undeclared'.
console.log(z); // Line 25 to 27 throws an error -> not declared
//NOTE: TEMPORAL DEAD ZONE: the period between its access and declaration.
let z;

console.log(z); // z = undefined
z = 1;
console.log(z); // z = 1
********************************************/

/***************************************
//3.BLOCK SCOPING
 //NOTE: variables using 'let' -> Block scoped
 //      variables using 'var' -> global scoped

    
        //Block 1
        {
            let x = 1;
        }
        //Block 2
        {
            console.log(x); // error -> not defined
        }
    
        //Block 1
        {
            var x = 1;
        }
        //Block 2
        {
            console.log(x); // Works fine
        }
    

//NOTE: if u redeclare same variable in two scopes, there wont be any error
//      bcoz they are in different scopes

//NOTE: if u want to create blocks in ES5,  have to put it in different functions
(function(){
    //Block scope 1
})

(function(){
    //Block scope 2
})

 *************************************/

/***********************************
//4.FUNCTIONS AND BLOCK SCOPING
//NOTE: (***IMP!!)
    // If u call a function in the "Global scope" in ES6 and there is a block in the global scope preceeding that function
    //  then that function is going to be able to access or use the above block and check for any initialization of it
    //  unlike accessing a variable in global scope where it cant access any declaration which is in above closest preeceding block.
    
    //case 1:
    {
        function greet(){
            console.log("Hi there");
        }
    }
    greet();  // Works fine according to above note
    
    
    //case 2:
    greet(); // error, As the declaration is below and in function scope
    {
        function greet(){
            console.log("Hi there");
        }
    }

    //case 3:
//But if the block scoping is not kept and function declared below greet() in global scope, it works fine coz Hoisting
    greet(); //Hi there.   works fine
    function greet(){
        console.log("Hi there");
    }

    *******************************/

/*********************************
//5.FUNCTION AND BLOCK SCOPING - USE 'let' for function expressions

//NOTE: u have to deal with above 3 cases if u are using function declarations and should have a clear idea of the scopes
//      Instead u 'let' and 'const' variables to store function expressions
//      So that they behave similar to variables and scopes in ES6 using let
//     Note that, there also wont be hoisting when used let keyword for function or variable declarations
//          and moreover functions are restricted to its individual scope only

let greet = function(){
    console.log('hi');
}
greet(); // hi
let x = 10;

{
    console.log(x); // works
    //greet();        //doesnt work error-> function not declared
    let greet = function(){
        console.log('hello');
    }
    greet();  //hello
}
greet(); // hi    ..unlike above 4rth module, it cant access its preeceding above scope.

//NOTE: If a function is not changing can use 'const' instead of 'let'

********************************/

/********************************
 //6.LET SCOPE VS CLOSURES
 //NOTE: Instead of using closures, u can use let
 for(let i = 0; i < 5; i++){
    document.getElementById(i).addEventListner('click', function(){
        console.log(i);
    })
 }
 *********************************/


 /****************************
 //7.CLOSURES CHALLENGE
 
 //create an empty array
 //Using a for looop insert three functions logging their corresoponding index inside the array
 //Provide the solution in both ES5 and ES6

 //SOLUTION IN ES6 (easy)
let cars = [];

 for(let i = 0; i < 3; i++){   //As we are using let new variable i is created for every iteration
    cars[i] = function(){
        console.log(i);
    };
 }

 cars[0]();
 cars[1]();
 cars[2]();


//ES5 Solution using closures
let bikes = [];

function f(x){
    return function(){
        console.log(x);
    };
}

 for(var i = 0; i < 3; i++){   //As we are using let new variable i is created for every iteration
    
    // bikes[i] = function(){
    //     console.log(i);
    // };   // u will get the last common variable value of i as uve used 'var'
    
    //INSTEAD
    bikes[i] = f(i);

 }

 bikes[0]();
 bikes[1]();
 bikes[2]();

 ******************************/

 /*******************************
  //8.CONST keyword
 // NOTE: 1) CONST variable must be initialized during declaration only
 //       2) CONST cannot be reAssigned
 //       3) CONST is block Scoped
 
 //CONST MAKE;
 const MAKE = 'Apple';
 console.log('MAKE');

 {
    const MAKE = 'Apple';
 }

 {
    const MAKE = 'Samsung';
 }

 //CONST and objects
 const LANGUAGE = {
    name: 'Javascript',
    version: 'ES5'
 };

 LANGUAGE.version = 'ES6'; // No error although lanauage is const, we can reassign its properties
 //NOTE: Error only if u do LANGUAGE = something

 ********************************/


 

 
 