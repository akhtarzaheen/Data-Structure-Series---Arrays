var merge = function(nums1, m, nums2, n) {
    let result  = [];
    let k=0;
    let i=0;
    let j=0;
    while(k<m){
        if(nums1[i]<=nums2[j]){
            i++;
        }else{
            nums1[i+1] = nums1[i];
            nums1[i] = nums2[j];
        }

        k++;
    }
};
let nums1 = [1,2,3];
let m = 6;
let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n)

console.log('res=>',nums1)