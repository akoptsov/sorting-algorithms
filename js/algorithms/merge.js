

function merge(array, start, med, end) {
    var p1 = start,
        p2 = med,
        i,
        v1, v2;
    
    //console.log('Merge:', array, start, med, end);
    
    
    while (p1 < p2 && p2 <= end) {
        if (array[p2] < array[p1]) {
        //console.log('      ', array, p1, p2);
            v2 = array[p2];
            
            for (i = p2; i > p1; i--) {
                array[i] = array[i - 1];
            }
            
            array[p1] = v2;
            p2++;
        }
        
        p1++;
        //console.log('     >', array);
    }

}

function sort(array, start, end) {
    var tmp,
        med;
    
    start = typeof start !== 'undefined' ? start : 0;
    end = typeof end !== 'undefined' ? end : (array.length - 1);
    
    //console.log(start, end);
    if (end === start) {
        return;
    }

    med = (start + end) >> 1;
    //console.log('Sort:', start, med, end);
    sort(array, start, med);
    sort(array, med + 1, end);
    merge(array, start,  med + 1, end);
}



exports.name = 'merge';
exports.sort = sort;