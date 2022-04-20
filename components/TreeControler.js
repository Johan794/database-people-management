import AVLTree from "../backend/AVLTree";
const tree = new AVLTree();

export function insert(value) {
  tree.insert(value);
}

export function deleteElement(value) {
  tree.delete(value);
}

export function search(value) {
  return tree.search(value);
}

export function getTree() {
    return tree;
}


//export default TreeControler;