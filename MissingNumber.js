const missingNumber = (nums) => {
  let total = 0;
  let sum = 0;
  for (let i = 0; i - nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};
