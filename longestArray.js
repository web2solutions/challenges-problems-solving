function solution(A) {
  
  let set = new Set()
  let largest = 0
  let indice = 0
  let nextIndice = 1

  if (A.length <= 2) return A.length

  while (nextIndice < A.length && indice <= nextIndice) {
    set.add(A[indice])
    set.add(A[nextIndice])
    // console.log(set)
    if (set.size <= 2) {
			nextIndice++;
		} else {
			let length = nextIndice - indice;
			if (length > largest) {
				largest = length;
			}
			set = new Set()
			indice++
			nextIndice = indice + 1
		}
  }

  largest = ((nextIndice - indice) > largest) ? (nextIndice - indice) : largest

	return largest
}

console.log(solution([4, 4]))



/**
 * 
 * 
 * 
 public static int solution1(int[] A) {
	if (A.length<= 2) return A.length;
	HashSet<Integer> set = new HashSet<>();
	int largest = 0 ;
	int i =0, j=1;
	while (j< A.length && i<=j) {
		set.add(A[i]);
		set.add(A[j]);
		if (set.size()<=2) {
			j++;
		} else {
			int length = j -i;
			
			if (length > largest) {
				largest = length;
			}
			set = new HashSet<>();
			i++;
			j=i+1;
		}
	}
	
	largest = j-i>largest?j-i:largest;
	return largest;
}

 */
