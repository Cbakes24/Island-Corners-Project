function getNeighbors(row, col, matrix) {
    //                  [1, 1, 1, 0, 0],
    //                  [0, 1, 1, 0, 1],
    //                   [0, 1, 1, 0, 1],
    const neighbors = [];
    // Check top
    if (row > 0 && matrix[row - 1][col]) neighbors.push([row - 1, col]);
    // Check top right
    if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1])
      neighbors.push([row - 1, col + 1]);
    // Check right
    if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1)
      neighbors.push([row, col + 1]);
    // Check bottom right
    if (
      row < matrix.length - 1 &&
      col < matrix[row].length - 1 &&
      matrix[row + 1][col + 1]
    )
      neighbors.push([row + 1, col + 1]);
    // Check bottom
    if (row < matrix.length - 1 && matrix[row + 1][col])
      neighbors.push([row + 1, col]);
    // Check bottom left
    if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1])
      neighbors.push([row + 1, col - 1]);
    // Check left
    if (col > 0 && matrix[row][col - 1]) neighbors.push([row, col - 1]);
    // Check top left
    if (row > 0 && col > 0 && matrix[row - 1][col - 1])
      neighbors.push([row - 1, col - 1]);
    // Return neighbors
    return neighbors;
    // Your code here
  }

  function countIslands(matrix) {
    debugger;
    // Create a visited set to store visited nodes
    let visited = new Set();
    // Initialize count to 0
    let islandCount = 0;
    // Iterate through all indices in matrix
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        const startPoint = [row, col].toString()
        // If an index contains a 1 and has not been visited,
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        if (matrix[row][col] === 1 && !visited.has(startPoint)) {
          islandCount++;

          // Initialize a stack with current index
          // Add stringified version of current index to the visited set
          let stack = [[row, col]];

          visited.add(startPoint); //BE CAREFUL ON WHAT IS PASSED INTO VISTED EVERY SPACE AND CHARACTER WILL COUNT
          // While stack contains elements
          // Pop element from stack
          while (stack.length) {
            const currentNode = stack.pop();
            const [currentRow, currentCol] = currentNode
            //OR
            //const currentRow = currentNode[0]
            //const currentCol = currentNode[1
        
            // Get valid neighbors of current element
            // Iterate over neighbors
            let neighbors = getNeighbors(currentRow, currentCol, matrix);
            // console.log(neighbors, ' neighbors')
            neighbors.forEach((neighbor) => {
              // If neighbor has not been visited
              // Add neighbor to stack
              if (!visited.has(`${neighbor}`)) {
                stack.push(neighbor);
                // Mark neighbor as visited
                visited.add(`${neighbor}`);
                console.log(visited)
              }
            });
          }
        }
      }
    }
    // Return island count
    return islandCount;
  }

  // Uncomment the lines below for local testing
  const matrix = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
  ];

  // console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
  // console.log(getNeighbors(2, 4, matrix)); // [[1,4]]

  const matrix2 = [
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
  ];

  console.log(countIslands(matrix)); // 2
  console.log(countIslands(matrix2)); // 3

  module.exports = [countIslands, getNeighbors];
