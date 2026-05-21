// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

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