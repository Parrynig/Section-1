const student = {
    name : 'Ramu',
    rollno : 545545,
    email : 'ram'
}
console.log(student);
console.log(student.name);
console.log(student['name']);

student.address = 'Lucknow';

student.rollno = 2134697976554795654;
console.log(student);

console.log( Object.keys(student));
console.log( Object.values(student));

const smartphone = {
    brand : 'Samsung',
    model : 'S23',
    price : 79000 ,
    colors : ['black', 'grey', 'white'],

}
console.log(smartphone.colors[1]);
smartphone.colors.push('Red');

console.log(smartphone);

const smartphoneList = [ 
    {brand : 'Samsung',   model : 'S23',   price : 79000 ,  colors : ['Black', 'grey'] },
    {brand : 'Samsung',   model : 'A55',   price : 39000 ,  colors : ['white', 'Black'] },
    {brand : 'Mi',   model : 'Note 3',   price : 15000 ,  colors : ['Blue', 'Red', 'white'] },
    {brand : 'Oneplus',   model : '12R',   price : 45000 ,  colors : ['Black', 'Green'] },
    {brand : 'Nokia',   model : 'Lumia',   price : 25000 ,  colors : ['Red', 'Yellow'] },
    {brand : 'Apple',   model : '17',   price : 13000 ,  colors : ['Sliver', 'White', 'Black'] }

];
console.log(smartphoneList[1].price);
console.log(smartphoneList[1].colors[1]);
smartphoneList[1].colors.push('Blue');
console.log(smartphoneList[1].colors);

// print 4th phone price

console.log(smartphoneList[3].price);

// filter all smartphone

const budgetPhones = smartphoneList.filter( (n) => { return n.price < 30000}  );
console.log(budgetPhones); 


console.log(smartphoneList.filter ((n) => {return n.brand ==='Samsung'}));

console.log('-------------');
// filter black phone 

console.log(smartphoneList.filter( (n) => {return n.colors.includes('Black')} ));

// Maps 
const brand = smartphoneList.map(  (n) => { return n.brand });
console.log( Array.from (new Set ( brand )));

const p = smartphoneList.map ( (n) => {return( n.price *0.9)} );
console.log(p);

const ans = smartphoneList.map ( (n) => { return (n.brand +' '+ n.price)}); 
                                            // return `${n.brand} - ${n.price}`
console.log(ans);

