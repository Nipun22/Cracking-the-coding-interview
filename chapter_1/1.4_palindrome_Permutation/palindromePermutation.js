const isPalindromePermutation = (str) => {
    str = str.toLowerCase(); // make the string case insensitive
    arr = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0);
    for (let i = 0; i<str.length; i++) {
        let c = str.charCodeAt(i) - 97;
        if (c >= 0 && c <= 25) {
            arr[c] += 1;
        }
    }
    let odd = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            if (odd) {
                return false
            }
            odd = true
        }
    }
    return true;
}

console.log(isPalindromePermutation('tactcoa'));