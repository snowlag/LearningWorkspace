const BubbleSort = (arr) => {
    console.log("Array to sort" , arr);
    for(let i = 1 ; i <= arr.length ; i++){
        var noSwap = true;
        console.log("Pass number ", i)
        for(let j = 0 ; j < arr.length - i ; j++){
            console.log(arr)
            console.log(`Comparing ${arr[j]} and ${arr[j+1]}`)
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j] + arr[j+1];
                arr[j+1] = arr[j] - arr[j+1];
                arr[j] = arr[j] - arr[j+1];
                noSwap = false
            }           
        }
        if (noSwap) break;
    }
    console.log("Sorted Array" , arr)
}

var arr =  [77 , 1 , 21 , 12 , 10 , 6 , 2];
bubbleSort(arr);


