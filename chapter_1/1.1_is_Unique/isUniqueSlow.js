//complexity (nlog(n))
let allUniqueChars = (str) => {
    //to get the string independent of the case
    str.toLowerCase();
    //string to arrray the sort it
    str = str.split("");
    str.sort();

    //a loop to compare the two consicutive characters
    //if they are same return false
    //else return true
    for(let i = 0; i < str.length-1;i++) {
        if (str[i] === str[i+1]) {
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