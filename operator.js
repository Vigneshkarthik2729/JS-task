var a = parseInt (prompt("Enter the number"));
var b = parseInt (prompt("enter the number"));
var c = prompt("operator");
var op;
if (c=='+') {
    console.log("addition: "+(a+b));
}
else if (c=='-') {
    console.log("subraction:"+(a-b));
}
else if (c=='*') {
    console.log("multiplication: "+(a*b));
}
else if (c=='/'){
    console.log("division: "+(a/b));
}
else{
    console.log("Invalid operator")
}