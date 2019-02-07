
// this solution takes additional space.
//as the number of elements having value 0 rises, this take up more space
// spaceComplexity = O(MN)
const generateZeroMatrix = function (arr, n, m) {
    let zeroPositions = [];
    for (let i = 0; i < m; i++) {
        for(let j = 0; j< n; j++) {
            if (arr[i][j] === 0) {
                zeroPositions.push([i, j]);
            }
        }
    }
    
    for (let i = 0; i < zeroPositions.length; i++) {
        //turn column to zero
        for (let j = 0; j < n; j++){
            arr[j][zeroPositions[i][1]] = 0;
        }
        //turn row to zero
        for (let j =0; j < m; j++) {
            arr[zeroPositions[i][0]][j] = 0;
        }
    }
}

//a slightly more optimized solution
// this take care of space problem earlier encountered
// spaceComplexity = O(1)
const generateZeroMatrixOptimized = function (arr) {
    m = arr.length;
    n = arr[0].length;
    //this boolean values make sure that if row or column has zero element
    let rowHasZero = false;
    let columnHasZero = false;

    //check if column has a zero element
    for (let i = 0; i < n; i++) {
        if (arr[i][0] === 0) {
            columnHasZero = true;
            break;
        }
    }

    //check if row has a zero element
    for (let j = 0; j< m; j++){
        if (arr[0][j] === 0) {
            rowHasZero = true;
            break;
        }
    }

    //run the loop for all elements except the first row
    //store the zero values in the first row
    for (let i = 1; i <n;i++) {
        for (let j = 1; j < m; j++) {
            if (arr[i][j] === 0) {
                arr[i][0] = 0;
                arr[0][j] = 0;
            }
        }
    }

    //now turn the elements of row to zero
    for (let i = 1; i < n; i++) {
        if (arr[i][0] === 0) {
            for (let j =1; j<m;j++){
                arr[i][j] = 0;
            }
        }
    }

    //now turn the elements of column to zero
    for (let j = 1; j < m; j++) {
        if (arr[0][j] === 0) {
            for (let i =1; i<n;i++){
                arr[i][j] = 0;
            }
        }
    }

    //check if the rowHasZero is true
    //if true the turn the first row to zero
    if (rowHasZero) {
        for (let j = 0; j<n; j++) {
            arr[0][j] = 0;
        }
    }

    //chek if the columnHasZero is true
    //if true then turn the first column to zero
    if (columnHasZero) {
        for (let i = 0; i< m; i++) {
            arr[i][0] = 0;
        }
    }
}