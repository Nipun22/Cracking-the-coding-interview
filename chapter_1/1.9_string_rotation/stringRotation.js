const isStringRotation = (str1, str2) => {
    if (str1.length === str2.length && str1.length) {
        return (str1+str1).includes(str2);
    }
    return false;
}

console.log(isStringRotation('waterbottle', 'erbottlewat'));