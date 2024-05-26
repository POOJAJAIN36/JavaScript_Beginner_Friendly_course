function hello()
{
    console.log("Hello Guys");
}
setTimeout(hello,8000); //1sec=1000ms.It will execute after 2 seconds.
setTimeout(hello,8000); //this will execute after 4 seconds.

console.log("Welcome");
console.log("I am learning JS");//first these 2 statements are executed

//function callback;
//make a calculator using callback functions.
function sum(a,b)
{
    console.log(a+b);
}

function sub(a,b)
{
    console.log(a-b);
}

function mul(a,b)
{
    console.log(a*b);
}

function div(a,b)
{
    console.log(a/b);
}

function calculator(a,b,callbackFun)
{
    callbackFun(a,b);
}

calculator(3,4,sum);
calculator(34,4,sub);
calculator(3,4,mul);
calculator(3,4,div);

//callback hell
function getData(data,getNextdata)
{
    setTimeout(()=>{
        console.log("data",data);
        if(getNextdata)
            {
                getNextdata();
            }
    },2000);

}

getData(1,()=>{
    console.log("searching for data 2....");
getData(2,()=>{
    console.log("Searching for data 3....")
getData(3);
    });
});

//promises are solution to callback hell
let promise1=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    //promise has three states:pending,resolved,reject.
    resolve("success");
});

let promise2=new Promise((resolve,reject)=>{
    console.log("I am a promise with reject state");
    reject("Error caught");
});

function getDatas(data,getNextdata)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",data);
        resolve("success");
        if(getNextdata)
            {
                getNextdata();
            }
    },5000);
});
}

let promise3 = getDatas(123);

//use of async function and await.
function api()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" Weather Data");
            resolve(200);
        },8000);
    })
}

(async function getWeatherData()
{
    await api();
    await api();
})();//we can use IIFE :immediately invoked function expression,to avoid function calls.
    //but also executes for single time and cannot be reused

//getWeatherData();

