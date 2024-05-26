//for loop
for(let i=0;i<5;i++)
{
    console.log("Hello Eveyone!");
}

//Print all even numbers from 2-50
console.log("For Loop");
for(let i=2;i<=50;i=i+2)
{
    console.log(i);
}

//calculate sum of numbers from zero to given input 
let x=prompt("Enter the number for sum calculation");
let sum=0;
for(let i=0;i<=x;i++)
{
    sum+=i;
}
console.log("The sum of numbers from zero to",x,"is :",sum);

//while loop
//Print all even numbers from 2-50 using while loop
console.log("While Loop");
let i=2;
while(i<=50)
{
    console.log(i);
    i+=2;
}

//do while loop
console.log("do While Loop");
let age=25;
do{
    console.log("Junior");
    age++;
}while(age<18);//checks condition after executing for one time

//for-of loop
console.log("for-of loop");
let str = "Learning Java Script!";
for(let i of str)
{
    console.log(i);
}

//for-in loop
const bankDetails ={
    fullName : "Pooja Jain",
    accNumber : 123456789,
    Age:20
};
for(let key in bankDetails)
{
    console.log(key,bankDetails[key]);
}

//Strings
let str1="Hello Everyone!";
let str2="Let's learn JS";
let str3="       Remove white spaces     ";
console.log(str1,"length is",str1.length);
console.log(str2,"length is",str2.length);

//accessing single letter from string using index
console.log("fifth letter in str1 is",str1[4]);//since indices start from 0

//Template literals
let prod ={
    fullName : "Basketball",
    price: 250,
    rating:4
};
let result = `The product name is ${prod.fullName} that cost's arround ${prod.price} and has a rating of ${prod.rating}`;
console.log(result);
//using $ is called string interpolation.

//using string methods
console.log("Using toUpperCase",str1.toUpperCase());
console.log("Using toLowerCase",str2.toLowerCase());
console.log("trim is used to remove white spaces",str3.trim());//removes whitespaces
console.log("slicing using indices of str1 from 1 to 5",str1.slice(1,5));
console.log("Concatnation of str1 and str2",str1.concat(str2));
console.log("replace search's the value and replace it with new value",str1.replace("Hello","Hi"));



