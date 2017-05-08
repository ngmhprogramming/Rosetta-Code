function alignColumnsInitialisation(){
    //var input = prompt("Input:");
    var input = "Given$a$text$file$of$many$lines,$where$fields$within$a$line$are$delineated$by$a$single$dollar$character,$write$a$programthat$aligns$each$column$of$fields$by$ensuring$that$words$in$each$column$are$separated$by$at$least$one$space.Further,$allow$for$each$word$in$a$column$to$be$either$left$justified,$right$justified,$or$center$justified$within$its$column.";
    alignColumns(input);
    console.log(input.length);
}
function alignColumns(){
    var output = "Nothing";
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) != $){
            console.log("lol");
            output+=input.charAt(i);
        } else {
            output+= " ";
        }
    }
    console.log(output);
}
alignColumnsInitialisation();