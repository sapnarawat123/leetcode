// sum of an contiguous subarray with the largest sum

//using brute force approach time complexity is O(n^2) and space complexity is O(1)

var maxSubArray = function(nums){
    let maxSum = nums[0];
    let currentSum = nums[0];

    for(let i=0; i<nums.length; i++){
        for(let j=i;j<nums.length;j++){
            currentSum += nums[j];
            if(currentSum > maxSum){
                maxSum = currentSum;
            }

        }
    }
    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

//kandane's algorithm time complexity is O(n) and space complexity is O(1)

var sub = function maxSum(nums){
    let currentSum=0;
    let maxSum = -Infinity;
    for(let i=0;i<nums.length;i++){
        currentSum += nums[i];
        maxSum = Math.max(maxSum,currentSum)
            
            if(currentSum<0){
            currentSum = 0; // fresh start — negative sum ko aage carry karna fayda nahi
            }
           }
           return maxSum;
}

// or you can write it like this , same logic but more concise for kandane's algorithm

var sub= function maxSum(nums){
    let currentSum =0;
    let maxSum= 0;
    for(let i=0;i<nums.length;i++){
        currentSum = Math.max(maxSum, currentSum+ nums[i]);
        maxsum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}
//////////////////////////////LEET CODE 523. Continuous Subarray Sum
/*
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 
Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false*/

var checkSubarraySum = function(nums,k) {
     let maxSum = 0;
     let subArray =[];
     for(let i=0;i<nums.length;i++){
         let currentSum = 0;
         for(let j=i;j<nums.length;j++){
             currentSum +=nums[j]
             let length =j-i+1
             if(currentSum % k===0 && length>=2 ){
         console.log("inside if")
     return true;
     }
    }       
     }

     
     return false
};

// console.log(checkSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4],4))

/*did above solution using brute force approach time complexity is O(n^2) and space complexity is O(1)
therefore it is not efficient for large input size, we can optimize it using hash map to store the cumulative sum and its index, so that its time limit won't exceed for larger ip

//using hash map to store the cumulative sum and its index time complexity is O(n) and space complexity is O(n)
