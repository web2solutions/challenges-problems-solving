class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length > 0)
        {
           this._pushToStackTop(newNode);
        }
        else{
            this.top = newNode;
            this.bottom = newNode;        
        }
        this.length++
        return this;

    }

    pop(){
      if(this.length > 1){
        return this._yeildStackTop();

      }else{
          this.bottom = this.top;
          return null;
      }
     
      
    }

     _pushToStackTop(newNode){
        let previousTop = this.top;
        newNode.next = previousTop;
        this.top = newNode;
        
     }
    _yeildStackTop() {
        let topNode = this.top;
        this.top = topNode.next;
        this.length--;
        return topNode;
    }
    
    isEmpty()
    {
        return this.length > 0? false : true;
    }    
  }
  
  const myStack = new Stack();
  myStack.push('google');
  myStack.push('amazon')
  var res = myStack.push('udemy');
console.log(res);

var poped = myStack.pop();
console.log(poped);


//Discord
//Udemy
//google
