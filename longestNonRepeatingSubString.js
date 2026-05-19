var lengthOfLongestSubstring = function(s) {
    let res=0
    let set = new Set();
    let left = 0;
    for(let right=0;right<s.length;i=right++){
        while(set.has(s[right])){
            set.delete(s[left]) 
            left++
        }
            set.add(s[right])
            res= Math.max(res,right-left+1)
    }
    return res

};