//dirrect way of defining object
const student ={
    fullName:"Pooja jain",
    age:20,
    //methods can be created in object
    printAge :function(){
        console.log(student.age);//this.age
    },
    printFullName(){
        console.log(this.fullName);
    },
};

//using one object in another object
const employee ={
    printTax(){
        console.log("Tax is 10% of your salary");
    },
};

const Ajay={
    salary:400000,
    printTax(){
        console.log("Tax is 30% of your salary");
    }
};

const Riya={
    salary:500000,
};

const Priya={
    salary:800000,
};

Riya.__proto__=employee; //Riya.printTax() can be used
Ajay.__proto__=employee; //Ajay.printTax() prints local function .
Priya.__proto__=employee;

//Make a class named product
class product{
    //constructors can have both paraameters and can also be invoked without parameters.
    constructor(qty)
    {
        console.log("New object has been created");
        this.qty=qty;
        console.log("Quantity required is",this.qty);
        //every time object is created constructor is automatically invoked.
    }
    price(){
        console.log("This will display the price");
    }
    rating()
    {
        console.log("This will display the rating");
    }
    setBrand(brand)
    {
        this.brandName=brand;
        console.log("brand name of the product is",this.brandName);
    }
}

let biscuit=new product(5);//object biscuit is created for product class.
biscuit.setBrand("Britania");
let perfume = new product(15);
perfume.setBrand("Fog");
let bag = new product(6);
bag.setBrand("American Touristor");

//apply concept of inheritance 
class Parent{
    //Parent class constructor is invoked even if bject is created for child class
    constructor()
    {
        console.log("I am a parent class constructor");
    }
    printParent()
    {
        console.log("Parent class");
    }
};
class Child extends Parent{
    constructor()
    {
        super();
        console.log("I am a child class constructor");
    }
    printChild()
    {
        console.log("Child class");
    }

};
let childObj = new Child();
let parentObj = new Parent();

//implementing try and catch blocks
let a=3;
let b=9;
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);
try{
    console.log("a+b",a+c);//the rest code will execute 
}catch(err)
{
    console.log(err);
}
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);


