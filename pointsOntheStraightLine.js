const points=[[0,2],[1,2],[1,3],[0,3],[2,3],[2,2],[3,2]]

const maxPointsOnStraightLine=(points)=>{
    if(!points.length)return 0;
    let slopeObj={},max=1;

    for (let i = 0; i < points.length; i++) {
        slopeObj={}
        for (let j = 0; j < points.length; j++) {
            if(j!==i){
                let slope = (points[j][1]-points[i][1])/(points[j][0]-points[i][0]);
                slopeObj[slope] = slopeObj[slope] ? slopeObj[slope]+1 : 2;
                console.log(slope,slopeObj)
                max=Math.max(max,slopeObj[slope]);
            }
        }
    }
    return max;
}

console.log(maxPointsOnStraightLine(points));