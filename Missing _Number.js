// Find Missing Number 

function findMissingNumber(nums) {
    const n = nums.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

let nums = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Missing Number:", findMissingNumber(nums));