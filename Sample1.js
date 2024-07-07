//Question:1   Find the FACTORIAL of N using functions


function calculateFactorial(){
    
    var num=5,factorial=1;
    for(var i=1;i<=num;i++){
        factorial*=i;
    }
    console.log("Factorial of " +num + " = " +factorial);
}
    
var cal=calculateFactorial();
      
    
    
//Question:3   Define a function expression factorial that takes one number as a parameter and returns its Factorial.

function Factorial(n){
    let fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    console.log("Factorial of " +n + " = " +fact);
}
        
var result=Factorial(10);
    

//Question:2   Create an Anonymous Function that takes an Array of numbers as an argument & returns the array with each element doubled
//             Assign this function to a variable called doubleArray.


let array=[2,4,6,8,10];
console.log("Numbers in the given Array:: "+array);

x=array.length;

console.log("Numbers after Doubling: ");
for(var i=0;i<x;i++){
    console.log(array[i]*2)
}

function array()





//write a function processArray that takes an array and a callback function as parameters. 
//The function should apply the callback function to each element of the array and return a new array with the results.
//Use an anonymous function as the callback to double each number in the array.



function processArray(array,callback){

    



}











