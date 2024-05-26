let marks = [23,45,65,45,67,78];
console.log("Print the array",marks);
//disimmilar datatypes can also be stored in array in JS
let prod = ["Pencil",5,2];
console.log(prod);
console.log("Length of prod array",prod.length);
//change the 45 marks to 54
marks[1]=54;
console.log("Updated array",marks);
//print all elements of marks array
console.log("Elements of marks array using method 1");
//method 1
for(let ele of marks)
{
    console.log(ele);
}
//method 2
console.log("Elements of marks array using method 2");
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}

//Array methods
//add 60,25,76,89 to marks array at last
marks.push(60,25,76,89);
console.log("Marks array after adding 60,25,76,89",marks);

//pop the last element
let deletedMarks=marks.pop()
console.log("After poping the last element from array",marks);
console.log("Deleted element is ",deletedMarks);

//Concat two arrays
prod_change=prod.concat(marks);
console.log("Concated array",prod_change);

//unshift and shift in array
marks.unshift(50);
console.log("Marks array after unshifting",marks);
let deletedMarksStart = marks.shift();
console.log("marks array after shifting",marks);

//splice is used to change the original array
marks.splice(2,3,0,0,0);
console.log("marks array aftr splicing it",marks);
//splice takes 3 parameters as input where 2 is start index,
//3 is number of elements to be deleted including index 2.
//0,0,0 is elements to be replaced instead of deleted elements
//replacing items is optional 
marks.splice(1,2);
console.log("Only deleting marks without replacing them",marks);


