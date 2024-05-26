let a=10;
let b=15;
//Arithematic Operators
console.log("a=",a);
console.log("b=",b);
console.log("a+b",a+b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a-b",a-b);
console.log("a%b",a%b);
console.log("a**b",a**b);

//Unary Operators
a++;
b--;
console.log("a++",a);
console.log("b--",b);

//Assingnment Operators
a+=5;  //a=a+5
console.log("a+=5",a);
a-=5;
console.log("a-=5",a);
b%=a;
console.log("b%=a",b);
a/=2;
console.log("a/=2",a);

//Comparision Operators
let x=1;
let y=2.5;
let z='1';
console.log("x==y",x==y);
console.log("x===y",x===y); //equal to and type
console.log("x!=y",x!=y);
console.log("x!==y",x!==y); //not equal to and type
console.log("x==z",x==z); /*returns true though string and number are compared since string is converted 
                     to integer and then checked (Loose equal to)*/
console.log("x===z",x===z); //returns false since type is not same.Strict equal to

//Logical Operators
let cond1 = x>y; //x=1,y=2.5
let cond2 = x==z;
console.log("cond1 && cond2",cond1 && cond2); //false
console.log("cond1 || cond2",cond1||cond2); //true
console.log("!(cond1 && cond2)",!(cond1 && cond2)); //true;




