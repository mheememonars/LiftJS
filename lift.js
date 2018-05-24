var maxWeigthLift = 1000;
var currentFloor = 10;

function startProgram() {
    checkWiegthOverload();
   // console.log(checkWiegthOverload())
    
}

function checkWiegthOverload(){
  if(document.getElementById("personWeight").value > maxWeigthLift) {
      document.getElementById("stateLift").innerHTML = "Stop";
  }else{
      checkStateLift();
  }
  document.getElementById("currentFloor").innerHTML = currentFloor;
  
}

function checkStateLift(){
    if(currentFloor < document.getElementById("targetFloor").value){
       document.getElementById("stateLift").innerHTML = "Up";
    }else if(currentFloor == document.getElementById("targetFloor").value){
        document.getElementById("stateLift").innerHTML = "Stop";
    }else{
          document.getElementById("stateLift").innerHTML = "Down";
    }


      
}