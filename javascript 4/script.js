console.log("loop in java script ");
 let a=1;
console.log(a);
for(let a=0;a<=10;a++){
    console.log(a);
    
}
let obj={
    name:'gagan',
    role:"programer"
}
for (const key in obj) {
    const ele=obj[key];
        
    console.log(key,ele);
    
}
for (const c of 'gagan') {
   
 console.log(c);
 
 
}

let ii=0
while(ii<10){
    console.log(ii);
    ii++

    
}
console.log("this is for do while loop ");
let iii=0
do {
    console.log(iii);
    iii++;
    
} while (iii<10);