class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value){
      let address = this._hash(key);
     
      let bucket = [key, value];
  
      if(!this.data[address]){
        this.data[address] = [];
      }
        this.data[address].push([key, value]);
        return this.data;
      
    }

    get(key){
      let address = this._hash(key);
      const currentBucket = this.data[address];
    
      if(currentBucket){
        for(let i = 0; i < currentBucket.length; i++)
        {
           if(currentBucket[i][0] === key){
             return currentBucket[i][1];
           }
        }
      }
      return undefined;
    }
  }

  const myHashTable = new HashTable(50);
  
  
  function findFirstRecurringCharacter(array1){
    var foundCharacter = null;
    let loopCounter = 0;

       while(loopCounter < array1.length){ // O(n)
           console.log(loopCounter);
           var arrayItem = array1[loopCounter];
           
           if(loopCounter > 0)
           {
              foundCharacter =  searchHashMap(arrayItem);
              //console.log("\This is found xter", foundCharacter);
           }
            
           if(foundCharacter !== null && foundCharacter !== undefined){
               //console.log(foundCharacter);
               console.log('Found first recurring character:', array1[loopCounter]);
               return array1[loopCounter];
           }
           
           myHashTable.set(arrayItem, 1);
           loopCounter++;
       }

       return undefined; // returns undefind if the characer does not re-occur.
  }

  function searchHashMap(inputKey) // O(1)
  {
     return myHashTable.get(inputKey)
     
  }
  
  var res = findFirstRecurringCharacter([2, 5, 5, 4, 1, 2, 3, 5, 1 ,2, 4])
  //var res2 = findFirstRecurringCharacter([2, 1,1, 2, 3, 5, 1 ,2, 4])
  //var res3 = findFirstRecurringCharacter([2, 3,4, 5])
  console.log("\n found", res);
