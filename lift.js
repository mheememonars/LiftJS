var maxWeigthLift = 1000;
var currentFloor = 10;
var maxFloor = 17;
var minFloor = 1;

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


       liftUp();


    }else if(currentFloor == document.getElementById("targetFloor").value){
        document.getElementById("stateLift").innerHTML = "Stop";
    }else{
          document.getElementById("stateLift").innerHTML = "Down";
    }


      
}

function liftUp(){
    for(currentFloor; currentFloor <=  document.getElementById("targetFloor").value ; currentFloor++){
         if(currentFloor < document.getElementById("targetFloor").value){

             document.getElementById("stateLift").append(" Up")
      


        }else if(currentFloor == document.getElementById("targetFloor").value){
             document.getElementById("stateLift").append(" Stop")
             break;
       
        }
    }
}