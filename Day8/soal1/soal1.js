let nums = [3, 2, 1, 1, 4];

let result
    if (nums[0] === 4) {
        result = true;
    } else if (nums[0] + nums[3] === 4 && nums[0] === 3) {
        result = true;
    } else if (nums[0] + nums[2] === 4 && nums[0] === 2) {
        result = true;
    } else if (nums[0] + nums[1] === 4 && nums[0] === 1) {
        result = true;
    } else if (nums[0] + nums[1] + nums[2] === 4 && nums[0] === 1 && nums[1] === 1) {
        result = true;
    } else {
        result = false;
    }
console.log(result);
