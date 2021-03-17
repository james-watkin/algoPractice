// Function that takes in an array of strings and group words together that are anagrams to eachother
// return a nested array with those words

//  const words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
//  const expected = [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo']];

function groupAnagrams(words) {
    let hash = {}
      
      for(let i = 0; i < words.length; i++){
          
          let currentWord = words[i]
          
          if(currentWord.length <= 1){
              if(hash[currentWord]){
                  hash[currentWord].push(currentWord)
              }else{
                  hash[currentWord] = [currentWord]
              }
          }else{
              let sortedSplitWord = currentWord.split('').sort()
  
              if(hash[sortedSplitWord]){
                  hash[sortedSplitWord].push(currentWord)
              }else{
                  hash[sortedSplitWord] = [currentWord]
              }
              
          }
      }
      
      return Object.values(hash)
  
  }