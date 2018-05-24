var Lift = {
    currentFloor: 1,
    maxWeigthLift : 1000,
    maxFloor : 17,
    minFloor : 1
   
};

var personWeight;
var targetFloor;

function startProgram() {
    personWeight = document.getElementById("personWeight").value;
    targetFloor = document.getElementById("targetFloor").value;

    document.getElementById("currentFloor").innerHTML = Lift.currentFloor;
    if(targetFloor > Lift.maxFloor || targetFloor < Lift.minFloor){
        alert("กรุณากรอกชั้น 1-17 ค่ะ");
    }else{
          document.getElementById("stateLift").innerHTML = "";
         checkWiegthOverload();
    }
    
}


function checkWiegthOverload(){
  if(personWeight > Lift.maxWeigthLift) {
      document.getElementById("stateLift").innerHTML = "Stop";
      alert("น้ำหนักเกิน");
  }else{ 
        checkStateLift();

  }
  document.getElementById("currentFloor").innerHTML = Lift.currentFloor;
  
}

function checkStateLift(){

    if(Lift.currentFloor < targetFloor){
       liftUp();
    }else{
        liftDown();
    }

}

function liftUp(){
    for(Lift.currentFloor; Lift.currentFloor <=  targetFloor ; Lift.currentFloor++){
         if(Lift.currentFloor < targetFloor){
             document.getElementById("stateLift").append(" Up")
     
        }else if(Lift.currentFloor == targetFloor){
             document.getElementById("stateLift").append(" Stop")
             break;
             alert("ถึงแล้ว");
       
        }
    }
}


function liftDown(){
    for(Lift.currentFloor; Lift.currentFloor >=  targetFloor ; Lift.currentFloor--){
         if(Lift.currentFloor > targetFloor){
             document.getElementById("stateLift").append(" Down")
     
        }else if(Lift.currentFloor == targetFloor){
             document.getElementById("stateLift").append(" Stop")
             break;
             alert("ถึงแล้ว");
          
        }
    }
}
