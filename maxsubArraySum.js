// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

//using brute force approach

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
        return maxSum;
    }
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))