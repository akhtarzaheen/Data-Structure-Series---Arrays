var merge = function(nums1, m, nums2, n) {
    let result  = [];
    let k=0;
    let i=0;
    let j=0;
    let largeLength = m>n ? m : n
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
    console.log('i,j=>',i,j)
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
let nums1 = [1,2,3];
let m = 3;
let nums2 = [2,5,6,9];
let n = 4;

console.log('res=>',merge(nums1, m, nums2, n))