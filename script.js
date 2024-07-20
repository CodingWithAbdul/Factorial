// --- by using reduse methode ---



let number = prompt("Enter Number for Factorial");
let i;
let factorial = [];

for (i = 1; i <= number; i++) {
    factorial.push(i);
    console.log(factorial);
}


const red = (a,b)=>{
    return a*b
}

document.write(factorial.reduce(red))


//  ---- By using for loop ----

// let number = prompt("Enter Number for Factorial",)
// let i = 1;
// for(let index = 1; index <= number; index++) {
//    i = i*index
//    console.log(index);   
// }
// document.write(i)


