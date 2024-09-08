const arrivals=[1,2,3,4,5,6,7,8,9]
const departure=[10,4,6,9,10,7,8,9,10]
const k=3;

const hotelBookingPossilityCheck=(arrivals,departure,k)=>{
    const sortedArr=arrivals.sort((a,b)=>a-b),length=arrivals.length;
    const sortedDep=departure.sort((a,b)=>a-b);
    let bookedRoom=0,arrvalCount=0,departureCount=0;
    for (let i = 0; i <length; i++) {
        if(sortedArr[arrvalCount]<sortedDep[departureCount]){
            bookedRoom++;
            arrvalCount++;
        }else if(sortedArr[arrvalCount]>sortedDep[departureCount]){
            bookedRoom--;
            departureCount++;
        }else{
            arrvalCount++;
            departureCount++;
        }
        if(bookedRoom>k){
            return false
        }
    }
    return true;
}
console.log(hotelBookingPossilityCheck(arrivals,departure,k));