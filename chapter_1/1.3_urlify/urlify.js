const encodeInUrl = function (str) {
    str = str.trim();
    return encodeURI(str);
}

console.log(encodeInUrl('mr. john smith    '));