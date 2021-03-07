const SelectionSort = (arr) => {
    console.log(`array to sort`, arr);
    for (let i = 0; i < arr.length; i++) {
        let min = i
        //pass through array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //swap
        if (i != min) {
            arr[i] = arr[i] + arr[min];
            arr[min] = arr[i] - arr[min];
            arr[i] = arr[i] - arr[min]
        }

    }
    console.log("Sorted array", arr)

}
var arr = [78, 34, 23, 11, 3, 8]
selectionSort(arr);

