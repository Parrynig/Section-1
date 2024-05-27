// CHECH WHETHER PERFECT SQUARE OR NOT 
let a=15;
let sqrt = Math.sqrt(a);
console.log(sqrt*sqrt === a);
console.log(sqrt ===parseInt(sqrt));

// PRIME NUMBER 
let n=23;
let c=0;
for(let i=1;i<=n;i++){
    if(n%i===0 ){
        c++;
    }

}
    if(c===2){
        console.log("Prime");
    }else{
        console.log("composite");
    }

// SUM OF NUMBERS 50-200
    let sum=0;
for(let i =50; i<=200;i++){
    sum+=i;
}
console.log(sum);
    
// SUM EVEN NUMBER 0=100
let sumeven=0;
for(let i =0; i<=100;i++){
    sumeven+=i;
}
console.log(sumeven);