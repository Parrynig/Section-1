const myArr = [736, 'hello', true , console.log, [1,2,3]];

console.log(myArr);

const movies=['Tere Naam', 'Animal', 'PK', 'RRR', 'Shaitaan'];
console.log(movies.length); //used for string

//indexing
console.log(movies[4]);    //assign and get  also for string
console.log(movies.at(3)); // can not change using it

console.log(movies.at(-4));  //indexing from right 

// slicing
console.log(movies.slice(1,3));// 2nd index not included  also used for string

console.log(movies.slice(1,40)); 
console.log(movies.slice(1));

const price= '₹536.65/-';

console.log(price.slice(1));
console.log(price.slice(0,-2));