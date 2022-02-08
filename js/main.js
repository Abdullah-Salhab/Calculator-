var turnon=true;
function turnon_off() {
    if (turnon) {
       clears();
       document.getElementById("myinput").style.background="black";
        
       let x=document.getElementsByTagName('button');
        
       document.getElementById("myinput").disabled=true;
        
       for (let index = 1; index < x.length; index++) {
           x[index].disabled=true;
       }
        
       x[0].innerText="ON";
        
       turnon=false;
    }
    else{
       document.getElementById("myinput").style.background="rgb(0, 57, 133)";
        
       let x=document.getElementsByTagName('button');
        
       document.getElementById("myinput").disabled=false;
        
       for (let index = 1; index < x.length; index++) {
           x[index].disabled=false;
       }
       x[0].innerText="OFF";
        
       turnon=true;
    }
}

function clears() {
    
   document.getElementById('myinput').value ="";
    
}

function add(num) {
    
   document.getElementById('myinput').value+=num;
    
}

function equal() {
    
   document.getElementById('myinput').value=eval(document.getElementById('myinput').value);
    
   result=true;
    
}

function MakeEnter(event) {
    
  if (event.keyCode === 13) {
      
       event.preventDefault();
      
       document.getElementById("button").click();
      
   }
}
