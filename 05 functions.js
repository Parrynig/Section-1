//1st 
function add (a,b){
   var  c=a+b;
    console.log(a+b);
}

add(5, 10);
// console.log(c);
//2nd 
const getAvg = function (m1,m2,m3) {
    const avg =(m1+m2+m3)/3;
    // console.log(avg);
    return avg;
    
}

const result = getAvg(45, 67, 89);
console.log(result);

//arrow function

const factorial = (n) => {
    let f=1;
    for(let i=2; i<=n;i++){
        f*=i;
    }
    return f;
}

const ans = factorial(5);
console.log(ans);

