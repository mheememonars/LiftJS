var Lift = {
    currentFloor: 1,
    maxWeigthLift : 1000,
    maxFloor : 17,
    minFloor : 1
   
};

var personWeight;
var targetFloor;
var arrayStateLift;

function startProgram() {
    personWeight = document.getElementById("personWeight").value;
    targetFloor = document.getElementById("targetFloor").value;

    document.getElementById("currentFloor").innerHTML = Lift.currentFloor;
    if(targetFloor > Lift.maxFloor || targetFloor < Lift.minFloor){
        alert("กรุณากรอกชั้น 1-17 ค่ะ");
    }else{
          document.getElementById("stateLift").innerHTML = "";
         isWeigth = checkWiegthOverload(personWeight);
         if(isWeigth == "น้ำหนักเกิน"){
             document.getElementById("stateLift").append(" Stop")
         }
         document.getElementById("currentFloor").innerHTML = Lift.currentFloor;
    }
    
}

function checkWiegthOverload(personWeight){
  if(personWeight > Lift.maxWeigthLift) {
      return "น้ำหนักเกิน";
  }else{ 
        checkStateLift(targetFloor);
        return "น้ำหนักไม่เกิน";

  }
  
}

function checkStateLift(targetFloor){
    if(Lift.currentFloor < targetFloor){
       liftUp();
       return "Up";
    }else if (Lift.currentFloor > targetFloor){
        liftDown();
        return "Down";
    }else {
        liftStop();
        return "Stop";
    }
}

function liftUp(){
    for(Lift.currentFloor; Lift.currentFloor <=  targetFloor ; Lift.currentFloor++){
         if(Lift.currentFloor < targetFloor){
             document.getElementById("stateLift").append(" Up")
        }else if(Lift.currentFloor == targetFloor){
             document.getElementById("stateLift").append("Stop")
             break;
       
        }
    }

}

function liftDown(){
    for(Lift.currentFloor; Lift.currentFloor >=  targetFloor ; Lift.currentFloor--){
         if(Lift.currentFloor > targetFloor){
             document.getElementById("stateLift").append("Down")
        }else if(Lift.currentFloor == targetFloor){
             document.getElementById("stateLift").append("Stop")
             break;
             alert("ถึงแล้ว");
        }
    }
}

function liftStop(){
  if(Lift.currentFloor == targetFloor){
             document.getElementById("stateLift").append("Stop")
  }
}