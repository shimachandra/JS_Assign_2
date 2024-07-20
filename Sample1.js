//Question:1   Find the FACTORIAL of N using functions

function calculateFactorial(){
    
    var num=5,factorial=1;
    for(var i=1;i<=num;i++){
        factorial*=i;
    }
    console.log("Factorial of " +num + " = " +factorial);
}  
var cal=calculateFactorial();
       

 
//Question:2   Create an Anonymous Function that takes an Array of numbers as an argument & returns the array with each element doubled
//             Assign this function to a variable called doubleArray.


const arr=[1,2,3,4,5,6];
console.log('Array elements are:',arr);

let doubleArray=(arr)=>{
    return ele*2;
}
console.log('Double of the given array :: ')
for(var j=0;j<arr.length;j++){
        ele=arr[j];
        let res=doubleArray(ele);
        console.log(res);
}

//Question:3   Define a function expression factorial that takes one number as a parameter and returns its Factorial.

function Factorial(n){
    let fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    console.log("Factorial of " +n + " = " +fact);
}      
var result=Factorial(10);
    


//write a function processArray that takes an array and a callback function as parameters. 
//The function should apply the callback function to each element of the array and return a new array with the results.
//Use an anonymous function as the callback to double each number in the array.

let array=[2,4,6,8,10];
console.log('Array elements  :',array);

function processArray(array,callback){

    for(let i=0;i<array.length;i++){
        let value=array[i];
        let call=callback(value);
        arr1[i]=call;
    }
    console.log('Resultant Array : ',arr1);
}

let double=(result)=>{
    return result*2;
}

let arr1=[];
processArray(array,double)




