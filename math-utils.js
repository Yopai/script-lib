//-------------------------------------
function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if (values.length % 2) {
       return values[half];
    }
    else {
       return (values[half-1] + values[half]) / 2.0;
    }
}

//-------------------------------------
function mean(values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total / values.length;
}
