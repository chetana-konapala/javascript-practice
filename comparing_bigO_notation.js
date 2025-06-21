let numbers=Array.from({length:1000},()=>Math.floor(Math.random()*1000));
function BubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
}
let bubblelist=[...numbers];
let start=performance.now();
BubbleSort(bubblelist);
let end=performance.now();
console.log("bubble sort time (ms):",(end-start).toFixed(2));
let builtinlist=[...numbers];
let start1=performance.now();
builtinlist.sort((a,b)=>a-b);
let end1=performance.now();
console.log("built sort time (ms):",(end1-start1).toFixed(2));
