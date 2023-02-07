//Problem-1

function mindGame(num){
    /*
    The work of this function is to take a number input, multiply it by 3, multiplied will sum by 10, divide the sum by 2, subtract the quotient by 5, after subtract this will be the final result, then the final result will be return.
    */

    if(typeof num != 'number'){
        return 'This is not a number please input a number';
    }
    else if(num<0){
        return 'This is not a number please input a positive number';
    }
    else{
        let multiple = num * 3;
        let addition = multiple + 10;
        let divison = addition / 2;
        let subtract = divison - 5;
        const final = subtract;
        return final;
    }
    
}

let value = mindGame('-1');
console.log(value);