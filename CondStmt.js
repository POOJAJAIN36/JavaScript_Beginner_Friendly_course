let age = 20;
//if statement
if(age>18)
{
    console.log("You can get Driving Liscense");
}
if(age<18)
{
    console.log("Under age to get Driving Liscense");
}

//if-else statement
if(age>=18)
{
    console.log("You can Vote");
}
else
{
    console.log("You cannot Vote");
}

//check whether number is divisible by 5 or not
let x = prompt("Enter a number");//Takes input from user
if(x%5===0)
{
    console.log("Yes",x,"is divisible by 5");
}
else
{
    console.log("NO",x,"is not divisible by 5");
}

//else-if statement
let y=45;
if(y<18)
{
    console.log("Junior");
}
else if(y>60)
{
    console.log("Senior");
}
else
{
    console.log("Middle");
}

//Ternarry Operator
age>=18?console.log("Valid age to Vote"):console.log("Not valid to Vote");





