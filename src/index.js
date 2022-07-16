module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result.push(matrix[i]);
        } else if (matrix[i] % 2 != 0) {
            result.push(matrix[i].reverse());
        }
    }
    let one = result.flat();
    return one;
};
