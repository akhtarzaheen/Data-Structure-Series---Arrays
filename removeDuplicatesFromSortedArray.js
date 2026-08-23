var removeDuplicates = function(nums) {
    let i=0;
    let j=i+1;
    while(i != j && i<nums.length && j<nums.length){
        if(nums[i] === nums[j]){
            j++;
        }else{
            i = i + 1;
            nums[i] = nums[j];
            nums[j] = null
        }
    }
    return i+1;
};
let nums = [1,1,2]
removeDuplicates(nums);
console.log('nums=>',nums)