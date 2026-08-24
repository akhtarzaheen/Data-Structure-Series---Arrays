var removeElement = function(nums, val) {
    let n = nums.length;
    let i=n-1;
    let j=n-1;
    let k=0;
    while(i>=0 &&j>=0){
         if(nums[j] === val){
            let t = nums[i];
            nums[i]= nums[j];
            nums[j]= t;
            i--;
            j--;
        }else
        if(nums[i] === val){
            i--;
        }else{
            j--;
            k++;
        }
    }
    return {k,nums};
};
let nums = [3,2,2,3];
console.log(removeElement(nums,3))

