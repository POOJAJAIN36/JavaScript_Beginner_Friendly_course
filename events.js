btn=document.querySelector("#btn");
 btn.ondblclick=(e)=>{
     console.log("This event handling is done in Java Script");
     console.log(e);
    console.log(e.type);
    console.log(e.target);
 }
//this can e written only once if we try to write another function it will be overwritten
//thus addEventListner can be used to get multiple statements without being overwritten
btn=document.querySelector("#btn");
btn.addEventListener("dblclick",() => {
    console.log("This is handler 1 using addEventListner");
});
//adding other addEventListner without overwritting
btn.addEventListener("dblclick",() => {
    console.log("This is handler 2 using addEventListner");
});

//create a toggle mechanism where modes are changed on single click of button
let modeBtn = document.querySelector("#mode");
let currMode ="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light")
        {
            currMode="dark";
            document.querySelector("body").style.backgroundColor="black";
        }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";

    }
});

//changing color to blue and pink
let bluePink = document.querySelector("#bluePink");
let body = document.querySelector("body");
let currM ="light";
bluePink.addEventListener("click",()=>{
    if(currM==="light")
        {
            currM="dark";
            body.classList.add("dark");
        }
    else
    {
        currM="light";
        body.classList.add("light");
    }
});
