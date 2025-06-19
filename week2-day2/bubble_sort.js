function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swapped=true;
            }
        }
        if(! swapped)
            break;
    }
    return arr;
    
}
array1=[12,34,67,2,90,7]
console.log(array1)
console.log(bubbleSort(array1))