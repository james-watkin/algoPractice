// Given integers in an array 1 to n inclusive find the first duplicate value or return -1

//Using a hash Time: O(n) Space: O(n)
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