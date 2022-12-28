'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let nums1 = nums.sort((a, b) => b - a);
    let secondLargestNumber = 0;
    let largestNumber = nums1[0];
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] < largestNumber && nums1[i] > secondLargestNumber){
            secondLargestNumber = nums1[i];
        }
    } return secondLargestNumber;
}

