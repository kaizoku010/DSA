function diameterOfBt(root) {
//find the minimum length of a binary tree
    if (!root) return 0;

    let max = 0;

    const dfs = (node) => {

        if (!node) return 0;

        let leftSide = dfs(node.left);
        let rightSide = dfs(node.right);

        // Update max with the current diameter
        max = Math.max(max, leftSide + rightSide);

        // Return the height of the current node
        return Math.max(leftSide, rightSide) + 1;
    };

    dfs(root);
    return max; // Return the diameter
}



const tree = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
    },
    right: {
        value: 3,
        left: null,
        right: null,
    },
};

console.log(diameterOfBt(tree)); // Output: 3
