//Problem-3

function isLGSeven(num){
    /*
    The work of this function is to take a number input and then subtract that number by 7. If the subtraction is less than 7, then it will return the subtraction and if the subtraction is equal to or greater than 7, then the input number must be multiplied by 2 and return the multiplied result.
    */

    if(typeof num != 'number'){
        return 'This is not a number please input a number';
    }
    else{
        let subtract = num - 7;
        if(subtract>=7){
        const final = num * 2;
        return final;
        }
        else{
        return subtract;
        }
    }
    
}

let value = isLGSeven(15);
console.log(value);