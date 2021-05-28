class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.length > 0)
        {
            let lastQueued = this.last;
            lastQueued.next = newNode;
            this.last = newNode
        }
        else{

            this.last = newNode;
            this.first = this.last;
        }

        this.length++;
        return this;
    }

    dequeue(){
        if(this.length > 0){
            let nextQueued = this.first.next;
            this.first =  nextQueued;
            this.length--;    
            return this;
        }
        else{
            this.last = this.first;
            return this;
        }
    }
    
    isEmpty(){
        return this.length > 0 ? false : true;

    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('google');
  myQueue.enqueue('amazon');
  var queue = myQueue.enqueue('microsoft');
  console.log(queue);
  var nextToProcess = myQueue.peek();
  //console.log(myQueue.isEmpty());
  console.log('Processing :', nextToProcess.value);
  console.log('Processing Complete :');
  myQueue.dequeue();
  console.log(queue);
  



  
