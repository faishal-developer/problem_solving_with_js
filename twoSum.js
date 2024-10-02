let array=[7,2,3,5,6,-7,-5,-2,-3,-9,3,6,7]

// solve twosum in O(nlogn)
const findTwoSum=(array)=>{
    array=array.sort((a,b)=>a-b);
    let l=0,length=array.length,r=length-1;

    while(l<r) {
        let temp = array[l]+array[r];
        if(temp===0){
            return [array[l],array[r]]
        }else if(temp>0){
            r=r-1
        }else{
            l=l+1;
        }
    }
}
// solve twosum in O(nlogn)

// solve twoSum in O(n)
const findTwoSum2=(array)=>{
    const arrayMapper={};
    for (let i = 0; i < array.length; i++) {
        let current=array[i];
        if(arrayMapper[current]){
            return [arrayMapper[current],current];
        }else{
            const target=-1*current;
            if(!arrayMapper[target]){
                arrayMapper[target]=current;
            }
        }
    }
}
console.log(findTwoSum2(array))
// solve twoSum in O(n)