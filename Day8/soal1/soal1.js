// let nums = [3, 2, 1, 1, 4];

// let result
//     if (nums[0] === 4) {
//         result = true;
//     } else if (nums[0] + nums[3] === 4 && nums[0] === 3) {
//         result = true;
//     } else if (nums[0] + nums[2] === 4 && nums[0] === 2) {
//         result = true;
//     } else if (nums[0] + nums[1] === 4 && nums[0] === 1) {
//         result = true;
//     } else if (nums[0] + nums[1] + nums[2] === 4 && nums[0] === 1 && nums[1] === 1) {
//         result = true;
//     } else {
//         result = false;
//     }
// console.log(result);

let nums = [1,0,2,1,4]
let temp = 0

function checker(number){
    
    if(nums[temp]> nums.length-1) {
       return console.log(false)
    } else if(temp > nums.length-1) {
        return console.log(false) 
    } else if(nums[temp] < nums.length-1) {
        if(nums[temp] === 0){
            return console.log(false) 
         }
       temp = nums[temp]+ nums[nums[temp]]
       checker(temp)
    }
    else {
       return console.log(true)
    }
}

checker(0)
