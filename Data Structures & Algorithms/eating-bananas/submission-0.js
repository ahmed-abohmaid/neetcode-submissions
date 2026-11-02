class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let ans = 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let guess = piles.reduce((acc, curr) => {
                const div = Math.ceil(curr / mid);
                return acc + div;
            }, 0);

            if (guess <= h) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}
