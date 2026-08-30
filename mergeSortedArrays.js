// Aproach 1

var merge1 = function(nums1, m, nums2, n) {
    let result  = [];
    let k=0;
    let i=0;
    let j=0;
    while(k<n+m){
        if(nums1[i]<=nums2[j]){
            result.push(nums1[i])
            i++;
        }else{
            result.push(nums2[j]);
            j++;
        }
        k++;
    }
    if(i<m){
        while(i<m){
                result.push(nums1[i])
                i++;
        }
    }
    if(j<n){
        console.log
        while(j<n){
                result.push(nums2[j]);
                j++;
        }
    }
    return result;
};

// Apprach 2

var merge2 = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0,m);
    console.log('nums1Copy=>',nums1Copy)
    let k=0;
    let i=0;
    let j=0;
    while(k<n+m){
        if((nums1Copy[i]<nums2[j] && i<m) || j>=n){
            nums1[k] = nums1Copy[i];
            i++;
        }else{
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }
};
let nums1 = [1,2,3];
let m = 3;
let nums2 = [2,5,6,9];
let n = 4;

merge2(nums1, m, nums2, n)

console.log('nums1=>',nums1)