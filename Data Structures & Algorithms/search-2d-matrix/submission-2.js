class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            let left = 0;
            let right = matrix[i].length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const guess = matrix[i][mid];

                if (guess === target) {
                    return true;
                } else if (guess > target) {
                    right -= 1;
                } else {
                    left += 1;
                }
            }
        }

        return false;
    }
}
