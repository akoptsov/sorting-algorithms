

function swap(array, i1, i2) {
    if (i1 === i2) {
        return;
    }
    
    var tmp = array[i1];
    array[i1] = array[i2];
    array[i2] = tmp;
}

function move(array, pOld, pNew) {
    if (pOld === pNew) {
        return;
    }
    
    var tmp = array[pOld],
        i
        
    if (pOld > pNew) { 
    
        for (i = pOld; i > pNew; i--) {
            array[i] = array[i - 1];
        }
        
    } else {
        
        for (i = pOld; i < pNew; i++) {
            array[i] = array[i + 1];
        }
        
    }
    
    array[pNew] = tmp;
}


exports.swap = swap;
exports.move = move;