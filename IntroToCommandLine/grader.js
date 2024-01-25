function average(scores) {
    var total = 0;
    var count = scores.length;
    
    for (var i = 0; i < count; i++) {
        total += scores[i];
    }
    
    console.log(Math.round(total / count));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68