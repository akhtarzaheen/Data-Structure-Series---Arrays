var moveZeroes = function(nums) {
    if(nums.length === 0){
        return nums;
    }
    let i=0;
    let j=i+1;
    while(j<nums.length){
        if(nums[i]===0 && nums[j]!==0){
            let t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
            i++;
        }
        if(nums[i]!==0){
            i++;
        }
        j++
    }
};
let nums = [0,1,0,3,12]
moveZeroes(nums);
console.log(nums)
