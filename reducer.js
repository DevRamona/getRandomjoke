function myReducer(array, reducer, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if(initialValue === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }
    for(let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array)
    }
    return accumulator;
} 