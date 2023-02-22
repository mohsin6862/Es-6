const friends = (arr)=>{
    
    
    for(let i = 0; i<arr.length;i++){

        if(arr[i] %2 ==0){
            console.log("even");
        }
        else {
            console.log('odd')
        }

    //    const friend = arr[i];
    //    console.log(friend)

        // if(arr.length % 2 == 0 ){
        //     console.log("even");
        // }
        // else{
        //     console.log('odd');
        // }
        

    }
}

const myFriends = friends(['sami','mamun','wasif']);


// function min(nums){ 
//     return Math.min(nums) 
//   }
//   console.log(min( [1,3,2 ]))

//   const cube=x=> x*x*x; 
// // console.log(cube(2));
// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
//   console.log(y);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);