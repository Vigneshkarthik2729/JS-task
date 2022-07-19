 var n = prompt("enter the number: ");
 function myFunction(num) {
    if (num==0) {
        text = "zero";
    } 
    else if(num==1){
        text = "one";
    }    
    else if(num==2){
        text = "two";
    }    
    else if(num==3){
        text = "three";
    }    
    else if(num==4){
        text = "four";
    }    
    else if(num==5){
        text = "five";
    }    
    else if(num==6){
        text = "six";
    }    
    else if(num==7){
        text = "seven";
    }    
    else if(num==8){
        text = "eigth";
    }    
    else if(num==9){
        text = "nine";
    }   
    return text; 
    }    
 var number = n;
 var a;
 var rem;
 while (number !=0) {
    rem = number%10;
    a = myFunction(rem);
    b = a;
    number = (number-rem)/10;
    console.log(b);
 }