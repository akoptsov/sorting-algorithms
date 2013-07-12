
function createBuckets(base) {
    var i,
        res = [];
    
    for (i = 0; i < base; i++) {
        res[i] = [];
    }
    
    return res;
}

function output(array, buckets) {
    var index = 0,
        count = buckets.length,
        nonempty = 0,
        bucket,
        size,
        i,
        j;

    for (i = 0; i < count; i++) {
        bucket = buckets[i];
        size = bucket.length;
        
        if (size) {
            nonempty++;
            
            for (j = 0; j < size; j++) {
                array[index++] = bucket[j];
            }
        }
        
        buckets[i] = [];
    }

    return nonempty;
}

function sort(array, base) {
    base = base || 10;
    
    var count = array.length,
        buckets = createBuckets(base),
        current = base,
        last = 1,
        nonempty,
        item,
        i,
        j;

    for (i = 0; i < base; i++) {

        for (j = 0; j < count; j++) {
             item = array[j];
             buckets[(item % current - item % last) / last].push(item);
        }

        nonempty = output(array, buckets);
        
        if (nonempty > 1) { 
        
            last = current;
            current *= base;
            
        } else {
        
            break;
            
        }
    }
}

exports.name = 'radix';
exports.sort = sort;