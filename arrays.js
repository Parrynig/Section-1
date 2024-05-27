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

//adding new elements

movies.push('The Dark Knight');
movies.unshift('The Godfather');
console.log(movies);

//removing elements
movies.pop(); //removes last element 
movies.shift(); //removes from starting
console.log(movies);    

//movies.splice(3,2);    // 3 is starting element and 2 elements will be removed..ie 3rd and 4th  remove 
movies.splice(3,2, 'Batman','Superman'); //will add element starting from 3rd index
console.log(movies);    
