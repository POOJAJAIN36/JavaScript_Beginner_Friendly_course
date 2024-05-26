//function defination
function fun()
{
    console.log("Welcome to functions chapter\n");
}

//function call
fun();
fun();
fun();//function call can be written many times

//Write functions with input parameters
function sum(a,b)
{
    console.log("sum of the numbers",a+b);
}
sum(2,3);

//write a function that return a value
function prod(a,b)
{
    let product= a*b;
    return product;
}
let result=prod(87,56);
console.log("Product of numbers",result);

//arrowFunction for product
const arrowProd =(a,b)=>{
    console.log(a*b);
};
console.log(arrowProd);
console.log("Multiplication using arrow function");//call it on console

//for given array add 10 to all elements using forEach loop
console.log("Add 10 to each element");
arr=[2,3,4,5,6];
arr.forEach(element => {
    console.log(element+10);
}); 

//convert all alphabets to upper case
console.log("Converting all alphabets to upper case");
arr1=['a','b','c','d'];
arr1.forEach((val)=>{
    console.log(val.toUpperCase());
});

//calculate square of each number
console.log("Calculate squares for each number");
let calcSquare = (ele)=>{
    console.log(ele*ele);
}
arr.forEach(calcSquare);

//calculate square of each number and store them in new array using map method
let newArr = arr.map((ele)=>{
    return (ele*ele);
})
console.log(newArr);//map is similar to forEach loop but additionally saves data in new array

//store all odd values in new array
let oddArr = arr.filter((ele)=>{
    return (ele%2!==0);
}) 
console.log(oddArr);

