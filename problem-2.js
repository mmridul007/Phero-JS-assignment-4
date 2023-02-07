//Problem-2

function evenOdd(str){
    /*
    The work of this function is to take a string input and then find out whether the string is even or odd depending on the number of elements in that string. It will return the result wheather it is even or odd.
    */

    if(typeof str != 'string'){
        return 'This is not a String please input a String';
    }
    else{
        const totalChar = str.length;
    if(totalChar%2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }

    }
    


}

let value = evenOdd('chatgpt');
console.log(value);
