//brute force approach
let nums = [2,7,11,15];
 let target = 9;
 let result = []
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        console.log("forrrr")
        if(nums[i]+nums[j]==target){
            return [i,j]
        }
    }
    }
    };
console.log(twoSum(nums,target))