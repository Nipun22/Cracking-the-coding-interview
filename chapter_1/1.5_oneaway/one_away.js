//difference in length is one
const away = function(str1, str2) {
    if (str1.length - str2.length === -1) {
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }
    let foundInsersion = false;
    let j = 0;
    for (let i = 0 ; i < str2.length; i++){
        if (str1[j] == str2[i]) {
            j++;
        } else {
            if(foundInsersion) {
                return false;
            }
            foundInsersion = true;
            j++;
            if (str1[j] == str2[i]) {
                j++;
            }
        }
    }
    return true;
}

//both strings are of same length
const edit = function(str1, str2) {
    let foundDifference = false
    for (let i = 0; i< str1.length;i++) {
        if (str1[i] != str2[i]) {
            if (foundDifference){
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}

//check which of the function needs to be called
const awayOrEdit = function(str1, str2) {
    let i = Math.abs(str1.length - str2.length);
    if ( i === 1) {
        return away(str1,str2)
    } else if ( i === 0) {
        return edit(str1, str2);
    } else {
        return false;
    }
}

console.log(awayOrEdit('pale', 'ple'));
console.log(awayOrEdit('pales', 'pale'));
console.log(awayOrEdit('pale', 'bale'));
console.log(awayOrEdit('pale', 'bake'));
console.log(awayOrEdit('pale', 'bak'));
console.log(awayOrEdit('pale', 'ba'));
console.log(awayOrEdit('pale', 'paels'));