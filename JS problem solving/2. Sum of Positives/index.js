let arr1 = [1,-2,3,4,-4,5,6,-8];
let arr2;
let sum ;

arr2 = arr1.filter((el)=>{
    return el>0
})
console.log(arr2);

sum = arr2.reduce((acc,el)=>{
    return acc+el;
} , 0)
console.log(sum);



