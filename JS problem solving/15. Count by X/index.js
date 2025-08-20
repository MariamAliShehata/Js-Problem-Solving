let arr=[];

function countBy(num1,num2){
    for(let i =1;i<=num2;i++){
        arr.push(num1 * i);
    }
    return arr;
}
console.log(countBy(2,5));
