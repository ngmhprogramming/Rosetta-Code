function ab(){
    var input = prompt("Input:");
    var numbers = input.split(" ");
    var firstNumber = parseInt(numbers[0]);
    var secondNumber = parseInt(numbers[1]);
    var answer = firstNumber + secondNumber;
    console.log(answer);
}
ab();