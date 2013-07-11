var utils = require('./utils/array'),
    swap = utils.swap;

function sort(array, start, end) {
    start = typeof start !== 'undefined' ? start : 0;
    end = typeof end !== 'undefined' ? end : (array.length - 1);
    
    if (start >= end) {
        return;
    }
    
    var pivot = (end + start) >> 1,
        value = array[pivot],
        position = start,
        i;
    
    swap(array, pivot, end);
    
    for (i = start; i < end; i++) {
        
        if (array[i] < value) {
            swap(array, i, position);
            position += 1;
        }
    }

    swap(array, end, position);

    sort(array, start, position);
    sort(array, position + 1, end);

}

exports.name = 'quicksort';
exports.sort = sort;