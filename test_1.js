function findPairs(nums1, nums2, k) {
    const pair = [];
    
    nums1.forEach(num => {
        const compliment = k - num;
        const lastNum = nums2.find(el => el === compliment);
        if (lastNum) pair.push([num, lastNum])
    })
    
    return pair;
}
