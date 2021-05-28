class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }

    insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          console.log('root has been set')
          return this;
      }
      
      let currentTree = this.root;
       while(currentTree !== null){
          
          if(currentTree.value < value){
              currentTree = this._setRightNode(newNode, currentTree);
          }
          else{
            currentTree = this._setLeftNode(newNode, currentTree);
          }
        }
      
      return this;
    }
     
    _setRightNode(newNode, currentTree){
        if(currentTree.right !== null){
            currentTree = currentTree.right;
        }
        else{
            currentTree.right = newNode;
            currentTree = null; //breaks the loop
        }
        return currentTree;
    }

    _setLeftNode(newNode, currentTree){
        if(currentTree.left !== null){
            currentTree = currentTree.left;
        }
        else{
           currentTree.left = newNode;
           currentTree = null // breaks the loop
        }
        return currentTree;

      }
      

    lookup(value){
       let currentNode = this.root;
       while(currentNode !==  null){
         if(currentNode.value === value){
           return currentNode;
         }
         else if(currentNode.value > value){
           currentNode = currentNode.left;
         }
         else{
           currentNode = currentNode.right;
         }
       }
       return currentNode;
    }

    /** 

    remove(value){
        let foundNode = this.lookup(value);
        
        if(foundNode.right !== null){
          let nextNode = foundNode.right;
          while(nextNode !== null){
            foundNode.value = nextNode.value;
            
            if(nextNode.right === null){
              foundNode.right = null;
              nextNode = nextNode.right;
            }
            else{
              foundNode = nextNode
              nextNode = nextNode.right;
            }
          }
          console.log(this);
          return this;
          
        }else if(foundNode.left !== null){
           let nextNode = foundNode.left;
           while (nextNode!==null){
              foundNode.value = nextNode.value;
              if(nextNode.right === null){
                foundNode.right = null;
              }else{
                foundNode = nextNode
                nextNode = nextNode.right;
              }
                        
           }

          return this;
        }
        else{
           foundNode.value = 0;
          //console.log(x);
          return this;
        }
    }
    // remove

    */
  }
  
  const tree = new BinarySearchTree();
  //tree.lookup('hello')
tree.insert(9)
tree.insert(4) 
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
var res = JSON.stringify(traverse(tree.root))
console.log(res);

var res3 = tree.remove(170);
res4 = JSON.stringify(traverse(tree.root));
console.log(res4);
//var result = tree.lookup(1);
//console.log(result.value);


//JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


