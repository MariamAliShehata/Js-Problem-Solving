let arr1 = [4,3,5,8,10,7,6];



let newArr = arr1.map((el)=>{
    if (Number.isInteger(Math.sqrt(el))){
        return  Math.sqrt(el);
    }
    else{
        return Math.pow(el,2);
    }
    
})

console.log(newArr);
