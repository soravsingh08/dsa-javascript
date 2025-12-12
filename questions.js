// Q1 WRITE FUN TO SEARCH AN ELEMENT IN AN ARRAY 
// function searchElement(arr,elem){ 
//     for (let i = 0;i<arr.length; i++){
//         if(arr[i] === elem){
//            return i ;
//         }
//     }
//     return -1;    
// }
// let arr =  [3,5,6,8,1,52];
// let result = searchElement(arr,8);
// console.log(result)


/// Q2 write a fun that return the no of negative number in array
// let negativeNum = 0;
// let arr = [1,-2,3,4,5,6,-4,-6,-8,-9];
// function calculateNeg(){
//     for(let i =0; i<arr.length; i++){
//       if(arr[i] < 0){
//          negativeNum ++
//       } 
//     }  
// }
// calculateNeg()
// console.log(negativeNum)

// Q3Write an function which return the largest number in an array.
// let lrgNum = -Infinity;
// let arr = [0,1,2,3,4,5,6,7,8,12,55,34,64,35]
// function largestNum(){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>lrgNum){
//             lrgNum = arr[i];
//         }
//     }
//       return lrgNum;
// }
// largestNum()
// console.log(lrgNum)


//DAY 03 - SECOND LARGEST NUMBER

// let lrgstNum = -Infinity
// let secondLrgstNum = -Infinity
// let arr =[4]

// function secondLrgst(){
//     if (arr.length < 2) {
//      return null
//     }
// for(let i=0; i<arr.length; i++){
//     if(arr[i]> lrgstNum){
//         secondLrgstNum = lrgstNum;
//         lrgstNum = arr[i]
//     }else if(secondLrgstNum > arr[i]){
//        secondLrgstNum = lrgstNum;
//     }
//     }
//     return secondLrgstNum
// }

// let sln = secondLrgst()
// console.log(sln)




let largestNum = -Infinity;
let secondLrgst = -Infinity;
let arr = [100,90,80];

function secondLargestNum(){
    for(let i = 0; i<arr.length; i++){
       if(arr[i]>largestNum){
        secondLrgst = largestNum;
        largestNum = arr[i]
       }

       else if(arr[i] > secondLrgst){
        secondLrgst = arr[i];
       }
    }
    return secondLrgst
}

let sln = secondLargestNum()
console.log(sln)