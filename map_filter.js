//Map
const nums = [ 2, 7, 3, 9, 12, 62];

const newNums = nums.map( (n) =>{  return n**2  } )
console.log(newNums);

const names = ['Ramu', 'Shamu', 'Pappuu', 'Kaliya'];

const len = names.map( (n)=> {
    return n.length;
})
console.log(len);

const prices =[ '₹234.762/-', '₹264.22/-', '₹90.1/-', '₹123.212/-'];

const ans = prices.map( (p)=> {
    return parseFloat(p.slice(1,-2));
})

console.log(ans);

//Fliter 

const evenNum =  nums.filter((n) => { return n%2===0});

console.log(evenNum);

const l= names.filter( (n) => { return (n.length >5) });
console.log(l);

const prices2 = [599, 220, 199, 350, 3200, 2830, 1980];
const p2 = prices2.filter( (n) => (n>500 && n<3000));
console.log(p2);
