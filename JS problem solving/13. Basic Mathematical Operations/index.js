let num1 = Number(prompt("Enter the first number"));
let char = prompt("Enter the operator");
let num2 = Number(prompt("Enter the second number"));
let total =0;

switch(char){
    case("+"): total = num1 + num2;
    break;
    case("-"): total = num1 - num2;
    break;
    case("*"):total =  num1 * num2;
    break;
    case("/"):total = num1 / num2;
    break;
}

console.log(total);
