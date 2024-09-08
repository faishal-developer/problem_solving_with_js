const intervals=[[5,8],[9,18],[12,31]]

const mergeIntervals=(intervals)=>{
    let i=1,r=0;
    const length=intervals.length,mergedArr=[intervals[0]];
    while (i<length) {
        if((mergedArr[r][0]<=intervals[i][0]) && (mergedArr[r][1]>=intervals[i][1])){
            
        }else if((mergedArr[r][1]>=intervals[i][0]) && (mergedArr[r][1]<=intervals[i][1])){
            mergedArr[r][1]=intervals[i][1]
        }else{
            mergedArr.push(intervals[i]);
            r++;
        }
        i++;
    }
    return mergedArr;
}

console.log(mergeIntervals(intervals));