function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return `${target} found at index ${i}`;
        }
    }
    return `${target} not found`;
}
array1=[12,34,67,2,90,7]
console.log(linearSearch(array1,35))