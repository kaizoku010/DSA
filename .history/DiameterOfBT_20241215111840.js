function diameterOfBt(root) {
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
