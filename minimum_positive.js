const findSmallestMissing = (res) => {
    let count = 1;
    if (!res.length) {
        return count;
    };
    while (res.indexOf(count) !== -1) {
        count++;
    };
    return count;
};

const minimum_positive_number = (arr) => {

    var finalarr = [];
    for (var k = 2; k <= arr.length; k++) {
    
        const n = k;
    
        const buildCombinations = (arr, num, finalarr) => {
            let res = [];
            let temp, i, j, max = 1 << arr.length;
            for (i = 0; i < max; i++) {
                temp = [];
                for (j = 0; j < arr.length; j++) {
                    if (i & 1 << j) {
                        temp.push(arr[j]);
                    };
                };
                if (temp.length === num) {
                    res.push(temp.reduce(function (a, b) { return a + b; }));
                };
            };
            res = [...new Set([...arr, ...res, ...finalarr])];
            return res;
    
        }
    
        var result = buildCombinations(arr, n, finalarr);
        finalarr = [...result];
    
        if (k == arr.length) {
            return findSmallestMissing(finalarr);
        }
    }
}

console.log("[1,2,8,7]==",minimum_positive_number([1, 2, 8, 7]));
console.log("[2, 3, 2, 3, 4, 2, 12, 3]==",minimum_positive_number([2, 3, 2, 3, 4, 2, 12, 3]));
console.log("[4, 1, 2, 3, 12]==",minimum_positive_number([4, 1, 2, 3, 12]));
