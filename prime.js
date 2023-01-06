  
  let fctr=0;
    for(let a=1; a<=num; a++){
        if(num%a==0){
           fctr++; 
        }
        
    }
    if(fctr==2){
        console.log("Yes");
    }
    else{
        console.log("No")
    }