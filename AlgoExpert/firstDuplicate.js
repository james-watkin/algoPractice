// Given integers in an array 1 to n inclusive find the first duplicate value or return -1

// Using a hash Time: O(n) Space: O(n)
function firstDuplicateValue(array) {
    let hash = {}
      
      for(let i = 0 ; i < array.length; i++){
          if(hash[array[i]]){
              return array[i]
          }else{
              hash[array[i]] = true;
          }
          
      }
    return -1;
}

// Why 1 to n inclusive?
// Due to it always being a value > 1 we can use negatives to our advantage
// Time: O(n)
// Space: O(1)
const firstDuplicates = (array) => {
    
	for(let i = 0; i < array.length; i++){
		let currVal = Math.abs(array[i])
		
		if( array[currVal -1 ] < 0){
			return currVal
		}else{
			array[currVal - 1] *= -1
		}
	}
	
    return -1;
}