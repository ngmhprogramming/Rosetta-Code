function ackermannInitialisation(){
    var input = prompt("Input:");
    var numbers = input.split(" ");
    var m = parseInt(numbers[0]);
    var n = parseInt(numbers[1]);
    var answer = 0;
    ackermann(m,n,answer);
}
function ackermann(m,n,answer){
    if (m === 0){
        answer = (n+1);
    } else if (m > 0 && n === 0){
        answer = (ackermann(m-1,1));
    } else{
        answer = (ackermann(m-1,ackermann(m,n-1)));
    }
}
ackermannInitialisation();
console.log(answer);