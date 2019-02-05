const rotateMatrix =  (arr, n) => {
    for (let layer = 0; layer < n /2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            //temp <- top
            let temp = arr[first][i];
            //top <- left
            arr[first][i] = arr[last-offset][first];
            //left <- bottom
            arr[last-offset][first] = arr[last][last-offset];
            //bottom <- right
            arr[last][last-offset] = arr[i][last];
            //right <- temp
            arr[i][last] = temp;
        }
    }
    return true;
}

let arr = [[1,2],[3,4]];
let n = 2
for(let i = 0; i < n; i++) {
    console.log(arr[i]);
}
let result = rotateMatrix(arr,n);
for(let i = 0; i < n; i++) {
    console.log(arr[i]);
}