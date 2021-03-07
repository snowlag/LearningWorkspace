const insertionSort = (arr) => {
    for(var i = 0 ; i< arr.length-1 ; i++){
        var element = arr[i+1];
        for(var j = i ; j>= 0 && arr[j] > element; j--){
            arr[j+1] = arr[j];
            arr[j] = element
        }  
        console.log(i+1 , "Pass");
        console.log(arr);  

    }
}
let arr =[34 , 56 , 21 , 11 , 4 , 2]
insertionSort(arr);
 

