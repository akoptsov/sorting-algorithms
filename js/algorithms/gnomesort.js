
var utils = require('./utils/array'),
    swap = utils.swap;
    

function sort (array) {
    
    var position = 1,
        count = array.length,
        last = 0,
        prev,
        last;
    
    
    while (position < count) {
        prev = position - 1;
        
        
        if (array[position] < array[prev]) {

            swap(array, prev, position)
            
            if (!last ) {
                last = position;
            }
            
            if (prev > 0) {
                position = prev;
            }

        } else {

            if (last) {
                position = last;
                last = 0;
            }

            position += 1;
        }
    }
}

exports.name = 'gnomesort';
exports.sort = sort;