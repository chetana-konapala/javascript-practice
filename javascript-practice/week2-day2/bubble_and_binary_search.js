function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped =false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr
}
function BinarySearch(array,target){
    array=bubbleSort(array)
    console.log(array)
    let left=0,right=array.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(array[mid]==target){
            return `${target} found at index ${mid}`
        }
        else if(array[mid]<target)
            left=mid+1
        else
           right=mid-1
    }
}
array1=["hello","papa","darling","daddy"]
console.log(BinarySearch(array1,"papa"))

