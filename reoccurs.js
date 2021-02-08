var arr = [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 0, 0];
// var arr = [0, 1, 'a', 2, 'a'];
// var arr = [0, 0, 1, 1, 2, 2];

console.log(arr);
const arr1 = [...new Set(arr)];

var obj = {};
arr1.forEach(x => {

    var array = [];
    arr.map((y, i) => {
        if (x == y) {
            array.push(i);
        }
    });
    obj[x] = array;

});

var result = [];
var j = 0;
Object.keys(obj).forEach(x => {

    // var arr = obj[x];

    var status = 0;

    for (var i = 0; i < obj[x].length; i++) {

        var num = obj[x][0] + i;
        if (num == obj[x][i]) {
            status = status + 1;
        }

    }
    if (status !== obj[x].length) {
        result.push(x);
    }
    j++;
    if (j == Object.keys(obj).length) {

        if (result && result.length > 0) {
            console.log("sequence break element === " + result);
        } else {
            console.log(`sequence break element ===  ` + null);
        }
    }

});




