var findMedianSortedArrays = function(nums1, nums2) {
  let l1 = nums1.length - 1
  let l2 = nums1.length
  if(nums1.length === 0 && nums2.length === 0)
  {
      return 0
  }
  for(let x = 0;x < nums1.length; x++) {
      //nums2.push(nums1[x])
  }
  let max = Math.max(...nums1)
  let min = Math.max(...nums2)
  const mid = Math.floor(nums2.length / 2)
  //const nums = [...nums2].sort((a, b) => a - b)
  if((nums2.length + nums1.length) % 2 !== 0){
      
  }
  //return nums2.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
};
