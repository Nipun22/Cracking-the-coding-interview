
const stringCompression = function (str) {
    let countConsicutive = 0;
    let compressedString = '';
    for (i = 0; i < str.length; i++) {
        countConsicutive++;
        if (i+1 >= str.length || str.charAt(i) != str.charAt(i+1)) {
            compressedString += str.charAt(i) + countConsicutive;
            countConsicutive = 0;
        }
    }
    return compressedString.length > str.length ? str : compressedString;
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abcde'));