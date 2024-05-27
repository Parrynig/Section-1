let nums = [23, 82, 183, 274, 9, 24];

for(let i=0;i< nums.length;i++){
    console.log(nums[i]**2);
}
for(let n of nums){
    console.log(n**2);
}

console.log('-------');
nums.forEach( (n) => {console.log(n);})

let ans =[];
for(let i=0;i<nums.length;i++){
    ans.push(nums[i]**2);       // ans[i]=nums[i]**2
}
console.log(ans);
