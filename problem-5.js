//Problem-5

function gemsToDiamond(friend1, friend2, friend3){
    /*
    The work of this function is to take 3 input of numbers. 3 inputs are gem numbers of 3 friends. 1st friend's gem number multiplied by 21, 2nd friend's gem number multiplied by 32, 3rd friend's gem number multiplied by 43. After adding the product of 3 people, if the sum is equal to or more than 2000, then the total sum will be subtracted by 2000 and the subtraction will be returned. And if the sum is less than 2000 then it will return the received sum.
    */

    if(typeof friend1 != 'number' || typeof friend2 != 'number' || typeof friend3 != 'number'){
        return "In This parameters there's not number please input number";
    }
    else{
        const friend1Total = friend1 * 21;
        const friend2Total = friend2 * 32;
        const friend3Total = friend3 * 43;

        let total = friend1Total + friend2Total + friend3Total;

        if(total> 1000*2){
            const final = total - (1000*2);
            return final;
        }
        else{
            return total;
        }
    }
    

}

console.log(gemsToDiamond(100, 5, 1));