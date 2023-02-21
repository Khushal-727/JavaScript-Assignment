function factorial(arg) {
    if (arg == 1 || arg == 0) {
        return  arg=1;
    }
    return arg * factorial(arg - 1);
}

const num = prompt("Enter number to find factorial of number :");
    if (num < 0 || num=="") {
        document.getElementById("result").innerHTML="Please enter a value Greater than Zero!!";
        
    } else {
        const answer = "Factorial of "+num+" is "+factorial(num)+".";
        document.getElementById("result").innerHTML = answer;
    }
