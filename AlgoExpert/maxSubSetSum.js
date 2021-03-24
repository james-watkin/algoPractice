function maxSubsetSumNoAdjacent(array) {
    if(array.length === 0) return 0;
      if(array.length === 1) return array[0]
      
      let second = array[0] // 105
      let first = Math.max(array[0], array[1]) // 120
      
      // [75, 105, 120, 75, 90, 135]
      
      for(let i = 2; i < array.length; i++){ // i = 4
          let current = Math.max(first, second + array[i]) // 180 , 120 + 90
          second = first // 180
          first = current // 200
      }
      
      return first
      
  }