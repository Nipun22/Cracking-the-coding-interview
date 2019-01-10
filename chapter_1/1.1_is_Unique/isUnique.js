let allUniqueChars = (str) => {
    //to get the string independent of case
    str.toLowerCase();
    //inititalze a object
    let chars = new Object;
    //save the characters in the object
    //if already in the object return false
    //else return true
    for(let i=0; i < str.length; i++) {
        if(!chars.hasOwnProperty(str[i])) {
            chars[str[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}

//test cases

console.log(allUniqueChars('qwerty'), true);
console.log(allUniqueChars('aawrf'), false);
console.log(allUniqueChars('q wtrv 1'), false);
console.log(allUniqueChars('1asdf 1'), false);