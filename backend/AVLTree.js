class AVLTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new this.Node(value);

        if(this.root == null){
            this.root = newNode;
            return;
        }else{
            this.insert(this.root,newNode);
        }
        
    }

    insert(currentNode,newNode){
        if(newNode.data < currentNode.data){
            if(currentNode.left == null){
                currentNode.left = newNode;
            }else{
                this.insert(currentNode.left,newNode);
            }
        }else{
            if(currentNode.right == null){
                currentNode.right = newNode;
            }else{
                this.insert(currentNode.right,newNode);
            }
        }

        newNode.parent = currentNode;

        /*
        currentNode.height = Math.max(this.getHeight(currentNode.left),this.getHeight(currentNode.right)) + 1;
        currentNode.balancefactor = this.getBalancefactor(currentNode);
        if(currentNode.balancefactor > 1 && value < currentNode.left.value){
            return this.rightRotate(currentNode);
        }
        if(currentNode.balancefactor < -1 && value > currentNode.right.value){
            return this.leftRotate(currentNode);
        }
        if(currentNode.balancefactor > 1 && value > currentNode.left.value){
            currentNode.left = this.leftRotate(currentNode.left);
            return this.rightRotate(currentNode);
        }
        if(currentNode.balancefactor < -1 && value < currentNode.right.value){
            currentNode.right = this.rightRotate(currentNode.right);
            return this.leftRotate(currentNode);
        }
        return currentNode;
        */

     
    
    
    }


    //create a function that will balance the tree
    balanceTree(){
        let newRoot = this.balance(this.root);
        this.root = newRoot;
    }


    balance(root){
        if(root == null){
            return null;
        }
        if(root.balancefactor > 1){
            if(root.left.balancefactor > 0){
                return this.rightRotate(root);
            }else if(root.left.balancefactor < 0){
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        }else if(root.balancefactor < -1){
            if(root.right.balancefactor < 0){
                return this.leftRotate(root);
            }else if(root.right.balancefactor > 0){
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        }
        return root;

    }


     
    search(value){
        if(this.root == null){
            return false;
        }
        return this.search(this.root,value);
    }

    search(currentNode,data){
        if(currentNode == null){
            return false;
        }
        if(data < currentNode.data){
            return this.search(currentNode.left,data);
        }else if(data > currentNode.data){
            return this.search(currentNode.right,data);
        }else{
            return currentNode;
        }

    }

    remove(value){
        let toDelete = new this.search(value); 
        this.root.removeNow(toDelete);
    }

    removeNow(toDelete){
        if(toDelete != null){
            if(toDelete.left == null && toDelete.right == null){
                if(toDelete.parent != null){
                   let aux = toDelete.parent;
                   if(aux.left == toDelete){
                       aux.left = null;
                   }else{
                       aux.right = null;
                   }
                   toDelete.parent = null;
                }
            }else if(toDelete.left == null){
                toDelete = toDelete.right;
            }else if(toDelete.right == null){
                toDelete = toDelete.left;
            }else{
                let temp = toDelete.right;
                while(temp.left != null){
                    temp = temp.left;
                }
                toDelete.data = temp.data;
                this.removeNow(temp);
            }







        }
    }

    getHeight(root) {
        let height = 0;
        if (root === null || typeof root == "undefined") {
           height = -1;
        } else {
           height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }
        return height;
     }

    getBalancefactor(root){
        return this.getHeight(root.left) - this.getHeight(root.right);
    } 
   
    rightRotate(root){
        let temp = root.left;
        root.left = temp.right;
        temp.right = root;
        root.parent = temp;
        temp.parent = root.parent;
        if(root.parent != null){
            if(root.parent.left == root){
                root.parent.left = temp;
            }else{
                root.parent.right = temp;
            }
        }else{
            this.root = temp;
        }
        root.height = Math.max(this.getHeight(root.left),this.getHeight(root.right)) + 1;
        root.balancefactor = this.getBalancefactor(root);
        temp.height = Math.max(this.getHeight(temp.left),this.getHeight(temp.right)) + 1;
        temp.balancefactor = this.getBalancefactor(temp);
        return temp;
    }

    leftRotate(root){
        let temp = root.right;
        root.right = temp.left;
        temp.left = root;
        root.parent = temp;
        temp.parent = root.parent;
        if(root.parent != null){
            if(root.parent.left == root){
                root.parent.left = temp;
            }else{
                root.parent.right = temp;
            }
        }else{
            this.root = temp;
        }
        root.height = Math.max(this.getHeight(root.left),this.getHeight(root.right)) + 1;
        root.balancefactor = this.getBalancefactor(root);
        temp.height = Math.max(this.getHeight(temp.left),this.getHeight(temp.right)) + 1;
        temp.balancefactor = this.getBalancefactor(temp);
        return temp;
    }



    

    inorder(root){
        if(root != null){
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }
}

AVLTree.prototype.Node = class {
    constructor(data, left = null, right = null, parent =null) {
       this.data = data;
       this.left = left;
       this.right = right;
       this.parent = parent;
    }
 };

 export default AVLTree;