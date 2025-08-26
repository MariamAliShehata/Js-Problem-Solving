function findAverage(array) {
    if (array.length === 0 ){
        return 0;
    }
    else{
    const sum = array.reduce((acc,num)=>{
        return acc + num;
    },0)
    return sum / array.length;
    }
    
    
}
console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));

