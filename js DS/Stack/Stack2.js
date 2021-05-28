//stack implemented with arrays

class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
      this.list = [];
    }

    peek() {
        return this.top;
    }

    push(value){
        this.list.push(value);
        this.length++;
        this.top = this.list[this.length-1];
        this.bottom = this.list[0];
        return this;

    }

    pop(){
     
     if(this.length >= 1){
         let poppedValue = this.list.pop();
         this.length--;
         this.top = this.list[this.length - 1];
         console.log(this);
         return poppedValue;
     }
     else{
         return null;
     }
      
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