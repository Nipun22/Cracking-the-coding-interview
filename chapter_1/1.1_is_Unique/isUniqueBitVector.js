//bit vector implementation
//note that this solution does not take into account any kind of symbols like space(' '), numbers 


var bitVector = function(size){
    this.store = [size/32+1];
}

//set the bit prototype
bitVector.prototype.setBit = function(bit, val){
    var index = ~~(bit / 32);
    var shift = ~~(bit % 32);
    var mask = 1 << shift;
    if (val){
            this.store[index] = this.store[index] | mask;
    } else {
            this.store[index] = this.store[index] & ~mask;
    }
}

//check if the bit is set
bitVector.prototype.isSet = function(bit){
    var index = ~~(bit / 32);
    var shift = ~~(bit % 32);
    var mask = 1 << shift;
    return (this.store[index] & mask) > 0;
}


let allUniqueChars = (str) => {
    let chars = new bitVector(26);
    //make string independent of case
    str.toLowerCase();
    
    //for each character in the string
    //if the corresponding bit is set return false
    //  set the bit then continue the loop
    //else return true
    for(let i = 0; i < str.length; i++) {
        let num = str[i].charCodeAt()-97;
        if(!chars.isSet(num)) {
            chars.setBit(num, 1);
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