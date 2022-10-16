const { NotImplementedError } = require('../extensions/index.js');

 //const { Node } = require('../extensions/list-tree.js');
 class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
  class BinarySearchTree {
    constructor(){
      this.roottree = null
    }
    root() {
      return this.roottree;
    }

    add(data) 
    {
      var newNode = new Node(data);                  
      if(this.roottree === null)
        { this.roottree = newNode;}
      else{ 
          this.insertNode(this.roottree, newNode);}
  }
  
  
  insertNode(node, newNode)
  {
      
      if(newNode.data < node.data)
      {
        
          if(node.left === null)
              node.left = newNode;
          else
  
            
              this.insertNode(node.left, newNode);
      }
  
      
      else
      {
        
          if(node.right === null)
              node.right = newNode;
          else
  
            
              this.insertNode(node.right,newNode);
      }
  }

  has(value, level = this.roottree) {
    if (this.roottree === null) {
      return false;
    } else if (level.data === value) {
      return true;
    } else if (level.data > value && level.left !== null) {
      return this.has(value, level.left);
    } else if (level.data < value && level.right !== null) {
      return this.has(value, level.right);
    } else {
      return false;
    }
  }

  find(value, level = this.roottree) {
    if (this.roottree === null) {
      return null;
    } else if (level.data === value) {
      return level;
    } else if (level.data > value && level.left !== null) {
      return this.find(value, level.left);
    } else if (level.data < value && level.right !== null) {
      return this.find(value, level.right);
    } else {
      return null;
    }
  }

  remove(value) {
    this.roottree = removeInner.call(this, this.roottree, value);
    function removeInner(currentNode, value) {
      if (!currentNode) {
        return null;
      } else if (currentNode.data > value) {
        currentNode.left = removeInner.call(this, currentNode.left, value);
        return currentNode;
      } else if (currentNode.data < value) {
        currentNode.right = removeInner.call(this, currentNode.right, value);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        }
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode
        } else if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode
        } else {
          let rightMin = this.min(currentNode.right)
          currentNode.data = rightMin
          currentNode.right = removeInner.call(this, currentNode.right, rightMin)
          return currentNode
        } 
      }
    }    
  }
    min(level = this.roottree) {
      if (level === null) {
        return null;
      } else if (level.left === null) {
        return level.data;
      } else {
        return this.min(level.left);
      }
    }
    max(level = this.roottree) {
      if (level === null) {
        return null;
      } else if (level.right === null) {
        return level.data;
      } else {
        return this.max(level.right);
      }
    }
  }
  var BST = new BinarySearchTree()
  console.log(BST.root)

module.exports = {
  BinarySearchTree
};