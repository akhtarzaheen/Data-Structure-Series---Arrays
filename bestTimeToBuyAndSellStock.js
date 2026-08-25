// brute force approach (n^2)
var maxProfit = function(prices) {
    let min = 0;
    let max = 0;
    let prof = -Infinity;
    for(let i=0;i<prices.length;i++){
        j = i+1;
        min = prices[i];
        while(j<prices.length){
            max = prices[j];
            let diff = max - min;
            if(diff>prof){
                prof = diff;
            }
            j++;
        }
    }
    if(prof<0){
        return 0;
    }
    return prof;
};

// best sol (n)
var maxProfit2 = function(prices) {
    let min = Infinity;
    let n = prices.length;
    let maxProf = 0;
    for(let i=0;i<n;i++){
        if(min>prices[i]){
            min = prices[i];
        }
        if(prices[i] - min > maxProf){
            maxProf = prices[i] - min
        }
    }
   
    if(maxProf<0){
        return 0;
    }
    return maxProf;
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit2(prices));