module.exports = function check(str, b) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (str[i] == b[j][0]) {
                count++;
        }
        if (str[i] == b[j][1]) {
            count--;
        } 
        if (count < 0) {
            return false;
        } 
    }
}
if (count != 0) {return false} else {return true};
}
'[(])'
[['(', ')'], ['[', ']']];
