class Solution {
    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {
        $left = 0;
        $right = count($height) - 1;
        $maxArea = 0;

        while ($left < $right) {
            $currentHeight = min($height[$left], $height[$right]);
            $width = $right - $left;
            $currentArea = $currentHeight * $width;
            
            $maxArea = max($maxArea, $currentArea);

            if ($height[$left] < $height[$right]) {
                $left++;
            } else {
                $right--;
            }
        }
        
        return $maxArea;
    }
}