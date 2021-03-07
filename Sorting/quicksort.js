
const pivothelper = (arr , start , end) =>{
    if(start != end){
        let pivotindex = start
        let position = start
        
        for(var i = start ; i < end ; i++){
            if(arr[i] < arr[position]){
               pivotindex++;
                swap(arr , i ,pivotindex);
            }
        }
            swap(arr , position ,pivotindex);
            return pivotindex
        }   
}

const quicksort = (arr , start = 0 , end = arr.length) =>{
    if(start < end){
        let index = pivothelper(arr , start , end);
        //left
        quicksort(arr , start , index-1 );
        //right
        quicksort(arr , index+1 , end );
    
    }
    return arr 
}

const swap = (arr , i , j) => {
  var temp = arr[i]
  arr[i] =arr[j]
  arr[j] = temp; 
}

var arr = [45 , 4 ,3 , 78 , 89 , 6 , 7 , 77 , 5];
var result = quicksort(arr)
console.log(result);