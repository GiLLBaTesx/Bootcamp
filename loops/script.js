console.log("connected");

let enternum = prompt("Give me a number");

function num (c) {
  
    let b = 50;
    for (b; b>=c ; b--){

        if (c < b ){
        console.log("number less than 50. Terminating the loop");
        return;
        // I put return so if its less than 50 even if its divisible by 10 or 5 it will still be terminated, but... if the problem ask to print the number even if its under 50 then Ill just remove the "return".
        }
        
        }
        // printing if divisible by 10 
        if (c %10 == 0) {  
            console.log("number is divisible by 10, Skipping the number");  
            return;
        }
        // printing number if divisible by 5
        else (c %5 == 0)
        {
            console.log(c);  
      } 
    }
    
   
   

    num(enternum);