var MSEC_IN_SEC = 1000.0,
    MAX_OUT_LENGTH = 21,
    algorithms = [
        require('./algorithms/bubble'),
        require('./algorithms/gnomesort'),
        require('./algorithms/selection'),
        require('./algorithms/insertion'),
        require('./algorithms/merge'),
        require('./algorithms/radix'),
        require('./algorithms/quicksort'),
        require('./algorithms/heapsort')
    ];


function log(message) {
    console.log((message || ''));
}

function logArray(array) {
    console.log(array.length < MAX_OUT_LENGTH ? array : '[array output suppressed]');
    console.log('\n');
}

function logResults(results) {
    console.log('\tMethod\t\tTime');
    console.log('\t=========\t=========');
    
    results.forEach(function (result) {
        console.log('\t' + result.name + (result.name.length >= 8 ? '\t' : '\t\t' ) + result.time / MSEC_IN_SEC + ' sec');
    });
    
    console.log();
}

function sort(array, impl) {
    var t;
    
    log('Sorting '+ ( impl.name ? 'with ' + impl.name + ' algorithm' : '') + ': ');
    
    t = new Date();
    
    impl.sort(array);
    
    t = new Date() - t;
    
    log('Sorted an array of ' + array.length + ' items in '+ t / MSEC_IN_SEC + ' seconds');
    
    return t;
}

function validate(array) {
    var count = array.length - 1,
        i;

    log('Validating...');

    for (i = 0; i < count; i++) {
        if (array[i] > array[i + 1]) {
            log('Validation failed: sorted[' + i + ']=' + array[i] + ', but sorted[' + (i + 1) + ']='+array[i + 1]);
            return;
        }
    }

    log('Resulting array is sorted correctly');
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function makeRandomArray(length, min, max) {
    var res = [],
        i;

    min = min || 0;
    max = max || length;
    
    for (i = 0; i < length; i++) {
        res[i] = randomInt(min, max);
    }

    return res;
}

function run(args, sorts) {
    var SPREAD_COEFF = 5,
        results = [];
    
    if (!args || !args.length) {
        log('Please provide array length as an argument');
        return;
    }
    
    var length = parseInt(args[0]);
    
    if (!length || length <= 0) {
        log('An array length must be non-negative integer');
    }
    
    var array = makeRandomArray(length, 0, length * SPREAD_COEFF);
    
    logArray(array);
    

    sorts.forEach(function (impl) {
        var copy = array.slice(),
            time;

        time = sort(copy, impl);

        logArray(copy);
        validate(copy);
        
        results.push({
            name: impl.name,
            time: time
        });
        
        log();
    });
    
    logResults(results);
}


run(process.argv.splice(2), algorithms);