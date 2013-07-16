
function indexMin(array, index) {
    var val = index || 0,
        count = array.length,
        i
        
    for (i = val + 1; i < count; i++) {
        if (array[val] > array[i]) {
            val = i;
        }
    }
    
    return val;
}

function sort(array) {
    var count = array.length,
        index,
        value,
        i,
        j;

    for (i = 0; i < count; i++) {
        index = indexMin(array, i);
        value = array[index];

        for (j = index; j > i; j--) {
            array[j] = array[j - 1];
        }
        
        array[i] = value;
    }
}

exports.name = 'selection';
exports.sort = sort;