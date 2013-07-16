var utils = require('./utils/array'),
    swap = utils.swap;

function sort(array) {
    var last = array.length - 1,
        sorted,
        i,
        j;
    
    for (i = 0; i <= last; i++) {
        sorted = true;
        
        for (j = last; j > i; j--) {

            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
                sorted = false;
            }

        }
        
        if (sorted) {
            break;
        }

    }
    
}


exports.name = 'bubble';
exports.sort = sort;
