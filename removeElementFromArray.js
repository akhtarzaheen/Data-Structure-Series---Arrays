var removeElement = function(nums, val) {
    let n = nums.length;
    let i=n-1;
    let j=n-2;
    let k=0;
    while(i>=0 &&j>=0){
        console.log('before','i=>',i,'j=>',j,'nums=>',nums)
        if(nums[i] === val){
            i--;
            // k++;
        }else if(nums[j] === val){
            let t = nums[i];
            nums[i]= nums[j];
            nums[j]= t;
            i--;
            j--;
            // k++;
        }else{
            j--;
            k++;
        }
        console.log('after=>','i=>',i,'j=>',j,'nums=>',nums)
    }
    return {k,nums};
};
let nums = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums,2))

