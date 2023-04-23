function unroll(squareArray) {
    const flattenedArray = [];
    const n = squareArray.length;
    
    for (let i = 0; i < Math.ceil(n / 2); i++) {
      // Unroll top row
      for (let j = i; j < n - i; j++) {
        flattenedArray.push(squareArray[i][j]);
      }
      
      // Unroll right column
      for (let j = i + 1; j < n - i; j++) {
        flattenedArray.push(squareArray[j][n - i - 1]);
      }
      
      // Unroll bottom row
      for (let j = i + 1; j < n - i; j++) {
        flattenedArray.push(squareArray[n - i - 1][n - j - 1]);
      }
      
      // Unroll left column
      for (let j = i + 1; j < n - i - 1; j++) {
        flattenedArray.push(squareArray[n - j - 1][i]);
      }
    }
    
    return flattenedArray;
  }

  module.exports = unroll;