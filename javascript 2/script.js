console.log("This is about variable in java script");
var a = 5;
var b = 5;
var _a = "gagan"//can be written
// var 55 ="gagan" //wrong declaraiton
var c = "i am string ";
console.log(a + b);
console.log(a + b + 5);
console.log(typeof a, typeof b, typeof c);


const a1=6;
// a1=a1+1 //this is not possible const cannto be changed
{
    let a=88 //this is the block scope this will only run in this block
    console.log(a)
}
console.log(a)
var l=56// it is like global variable
console.log(l)
{
    console.log(l)
}
// var is golbaly scoped it is not block scoped 
//let is block scoped it is most used 
var x ="gagan"
var y="123"
var z="343.343"
var p="true"
var q=null;
var r=undefined;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
