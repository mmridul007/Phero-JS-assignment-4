//Problem-4

function findingBadData(arrOfAges){
    /*
    The work of this function is to take an array input. If there are negative numbers in the array then find the total number and return that number.
    */

    if(Array.isArray(arrOfAges)){
        let count = 0;
        for(let i=0; i<arrOfAges.length; i++){
        const element = arrOfAges[i];
        if(element<0){
            count++;
        }
        }
        return count;
    }
    else{
        
        return 'This is not an array please input an array';
    }
    
}

const ages = [ -4, -9, -5, -33, -55 ];
const badData = findingBadData(ages);
console.log(badData);