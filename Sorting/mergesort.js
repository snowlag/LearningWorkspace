const SplitArray = (arr) => {
    let arraylength = arr.length;
    if(arraylength > 1){
        let left = arr.slice(0 , arr.length / 2);
        let rigth= arr.slice((arr.length / 2) ,arr.length )
        console.log(left , rigth)
        let LeftArrayToMerge = SplitArray(left);
        let RightArrayToMerge = SplitArray(rigth);
        return MergeArray(LeftArrayToMerge , RightArrayToMerge)
        
    }else{
        return arr
    }
   
}
const MergeArray = (left , right) => {
console.log("========================")
console.log("Array to merge")
console.log(left , right)
let MergedArray = []
let i = 0;
let j = 0;
while(i< left.length && j< right.length){
    if(left[i] < right[j] ){
        MergedArray.push(left[i]);
        i++;
    }else{
         MergedArray.push(right[j]);
         j++;
    }
}

if(i!= left.length){
    while(i < left.length){
        MergedArray.push(left[i])
        i++;
    }
}else{
    while(j < right.length){
        MergedArray.push(right[j])
        j++;
    }
}

return MergedArray;  
}

const splitArray = (arr) => {
    if(arr.length > 1){
        var mid = arr.length/2;
        var leftarray = arr.slice(0 , mid);
        var rightarray = arr.slice(mid , arr.length)
        var leftarraytomerge = splitArray(leftarray);
        var rightarraytomerge = splitArray(rightarray);
        return mergeArray(leftarraytomerge , rightarraytomerge)
    }else{
        return arr
    }
}

const mergeArray = (left , right) => {
    let i = 0 , j = 0;
    var mergedarray = []
    while(i< left.length && j< right.length){
        if(left[i] < right[j]){
            mergedarray.push(left[i])
            i++
        }else{          
            mergedarray.push(right[j])
            j++
        }
    }
    if(i!= left.length){
        while(i< left.length){
            mergedarray.push(left[i])
            i++
        }
    }else{
        while(j< right.length){
            mergedarray.push(right[j])
            j++
        }           
    }
    return mergedarray

}

const arr = [85 , 34 , 23 , 12 , 89]
var sortedArray = splitArray(arr);
console.log(sortedArray)
