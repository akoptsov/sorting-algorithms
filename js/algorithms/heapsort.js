
function heapify(array, length, root) {
    
    if (root > length) {
        return;
    }
    
    var leftChild = root + root + 1,
        rightChild = leftChild + 1,
        value,
        lValue,
        rValue;
    
    if (leftChild >= length) {
        return;
    }
    
    value = array[root];
    lValue = array[leftChild];
    
    if (rightChild < length && (rValue = array[rightChild]) > value && rValue > lValue) {
        
        //console.log('l:', lValue, 'p: ', value, 'r: ', rValue);
        array[rightChild] = value;
        array[root] = rValue;
        heapify(array, length, rightChild);
        //console.log(array);
        
    } else if (lValue > value) {
        
        //console.log('l:', lValue, 'p: ', value);

        array[root] = lValue;
        array[leftChild] = value;
        heapify(array, length, leftChild);
        //console.log(array);
    }
    
}


function sort(array) {
    
    var count = array.length,
        max,
        i;
    
    //console.log('heap');
    for (i = count - 1; i >= 0; i--) {
        heapify(array, count, i);
    }
    //console.log('sort');
    for (i = count - 1; i >= 0; i--) {
        
        max = array[0];
        array[0] = array[i];
        array[i] = max;
        
        heapify(array, i, 0);
        //console.log(array, i, max);
    }
    
}



exports.name = 'heap';
exports.sort = sort;