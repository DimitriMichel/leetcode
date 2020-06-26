const inOrderTraversal = (root) => {
  const results = [];
  const stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      results.push(root.val);
      root = root.right;
    }
  }
  return results;
};
