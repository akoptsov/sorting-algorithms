
function sortedPosition(array, index) {
    var position = index;
    
    while (position > 0 && array[position - 1] > array[index]) {
        position--;
    }
    
    return position;
}

function sort(array) {
    var count = array.length,
        position,
        value,
        i,
        j
        
    for (i = 1; i < count; i++) {
        position = sortedPosition(array, i);
        value = array[i];

        if (position !== i) {

            for (j = i; j > position; j--) {
                array[j] = array[j - 1];
            }

            array[position] = value;
        }
    }
}

exports.name = 'insertion';
exports.sort = sort;