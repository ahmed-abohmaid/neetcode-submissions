class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        while (low <= high) {
            let mid = Math.ceil((low + high) / 2);
            let guess = nums[mid];

            if (guess === target) {
                return mid;
            } else if (guess > target) {
                high -= 1;
            } else {
                low += 1;
            }
        }

        return -1;
    }
}
