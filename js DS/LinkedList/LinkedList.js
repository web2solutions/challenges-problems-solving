//It's all about manipulating pointers to objects in memory.
//10 --> 18 --> 19 --->21 --> 4

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next : null
        }

        this.tail = this.head;  //refers to the same object in memory that was initilized by the constuctor.
        this.length = 1;
    }

    append(newItem) //this is possible becos tail and next will point to the same object in memoery, we chage the valu of tal.next to a new objwct and point tail to that new onject
    {
        let newNode = new Node(newItem);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;      
    }

    reverse(){
       
    }

    prepend(newItem){
        let newNode = new Node(newItem);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }

    insert(index, value){

        let listResult = undefined;
        if(this._validateInsertIndex(index) === false){
            return this;
        };

        listResult = this._prePendWhenIndexIsZero(index, value);
        if(listResult !== undefined)
        {
            return listResult;
        }

         listResult =  this._insertNode(index, value);
         return listResult;

    }

    _insertNode(index, value){
        let newNode = new Node(value);
        let nextNode = undefined;
        let currentNode = this.head;
        let previousNode = undefined;
           
        for(let i = 0 ; i < this.length; i++){
             nextNode = currentNode;
             if(i === index){
                 newNode.next = nextNode;
                 previousNode.next = newNode;
                 this.length++;
                 break;
             }
             previousNode = currentNode;
             if(nextNode.next === null)
             {
                 //end of linked list exit loop;
                 break;
             }
             currentNode = nextNode.next;
         } 
        
        return this;
    }
     
     _validateInsertIndex(index){
         if(index < 0){
            console.log('index must be a postive integer')
            return false;
         }
         else if(index >= this.length){
            console.log('index must be between 0 and length of list: (0 - length -1)');
            return false;
         }
     }

     
     _prePendWhenIndexIsZero(index, value){
        if(index === 0)
        {
            this.prepend(value);
            console.log('prepend called');
            return this;
        }
        
     }

     remove(index){
         if(this._validateInsertIndex(index) === false){
            return this;
         }

         if(index === 0)
         {
             this._removeAtHead();
         }
         else if(index == this.length -1)
         {
             this._removeAtTail(index);
         }
         else
         {
              this._removeAtIndex(index);
         }
     }

     _removeAtHead(){
         let currentNode = this.head;
         let nextNode = currentNode.next;
         this.head = nextNode;
         this.length--;
         this.printList();
         return this;
     }

     _removeAtTail(index){
         let currentNode = this._traverseList(index-1);
         currentNode.next = null;  
         this.tail = currentNode;
         this.length--;
         this.printList();
         return this;
     }

     _removeAtIndex(index)
     { 
         let previousNode = this._traverseList(index-1);
         let nodeToRemove = previousNode.next;
         let nextNode = nodeToRemove.next;
         previousNode.next = nextNode;
         this.length--;
         this.printList();
         return this;

     }

     _traverseList(index){
         let currentNode = this.head;
         let count = 0;
         while(index !== count){
             currentNode = currentNode.next;
             count++;
         }
         return currentNode;
     }

    printList(){
        let currentNode = this.head;
         let listValues = [];
      while(currentNode!== null)
      {
         listValues.push(currentNode.value);
         currentNode = currentNode.next;
      }
      
    
      console.log(listValues);
      console.log('Length of list is', this.length);
      console.log(listValues);
      console.log('-------End of list-------')
      return listValues;
  } 

}


let  myList = new LinkedList(28);
myList.append(7);
myList.append(710);
myList.append(90);
myList.append(6);
//myList.(45);

myList.reverse();
//myList.printList();
//console.log('\n');

//let list1 =myList.insert(4, 102);
//let list2 = myList.insert(1, 50);
//list1.printList();
//list2.printList();

//

//myList.remove(0);
//myList.remove(3);







//store last vaue in hashTable