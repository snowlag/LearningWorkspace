//Incomplete
const getLargestNumberlength = (arr) => {
    var largest = arr[0]
    let i;
    for(i = 0; i< arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    var numberstring = largest+"";
    console.log(numberstring.length);
    return numberstring.length;
}

const getDigit =(digit , index) => {
    return Math.floor((digit/(Math.pow(10 , index)))%10)
}


