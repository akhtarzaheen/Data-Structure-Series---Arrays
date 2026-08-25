// Method 1
// function reverseString(s){
//     return s.reverse();
// }

// console.log(reverseString(["D","A","T","A"]))

// Methid 2
function reverseString2(s){
    let n = s.length;
    let i=0;
    let j=n-1;
    while(i<j){
        let t = s[j];
        s[j] = s[i];
        s[i] = t;
        i++;
        j--;
    }
}
let s  = ["D","A","T","A"];
reverseString2(s);
console.log('Result=>',s);
