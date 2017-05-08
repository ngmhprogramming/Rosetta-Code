function sing(){
    var song = "";
    for (i = 100; i > 0; i--) {
        if(i > 2){
        song+=((i-1) + " bottles of beer on the wall\n" + (i-1) + " bottles of beer\nTake one down, pass it around\n" + (i-1) + " bottles of beer on the wall\n\n");
        } else if (i == 2){
            song+=((i-1) + " bottle of beer on the wall\n" + (i-1) + " bottle of beer\nTake one down, pass it around\n" + (i-1) + " bottles of beer on the wall\n\n");
        } else{
            song+=("0 bottles of beer on the wall\n0 bottles of beer\nTake one down, pass it around\nWe ran out of bottles! Yay!");
    }
}
    console.log(song);
}
sing();