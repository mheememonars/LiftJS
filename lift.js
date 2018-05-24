var maxWeigthLift = 1000;
var currentFloor = 10;
var maxFloor = 17;
var minFloor = 1;

function startProgram() {
    document.getElementById("currentFloor").innerHTML = currentFloor;
    if(document.getElementById("targetFloor").value > 17 || document.getElementById("targetFloor").value < 1){
        alert("กรุณากรอกชั้น 1-17 ค่ะ");
    }else{
          document.getElementById("stateLift").innerHTML = "";
         checkWiegthOverload();
    }
       

   // console.log(checkWiegthOverload())
    
}


function checkWiegthOverload(){
  if(document.getElementById("personWeight").value > maxWeigthLift) {
      document.getElementById("stateLift").innerHTML = "Stop";
      alert("น้ำหนักเกิน");
  }else{ 
        checkStateLift();

  }
  document.getElementById("currentFloor").innerHTML = currentFloor;
  
}

function checkStateLift(){

    if(currentFloor < document.getElementById("targetFloor").value){
       liftUp();
    }else{
        liftDown();
    }

}

function liftUp(){
    for(currentFloor; currentFloor <=  document.getElementById("targetFloor").value ; currentFloor++){
         if(currentFloor < document.getElementById("targetFloor").value){
             document.getElementById("stateLift").append(" Up")
     
        }else if(currentFloor == document.getElementById("targetFloor").value){
             document.getElementById("stateLift").append(" Stop")
             alert("ถึงแล้ว");
             break;
       
        }
    }
}


function liftDown(){
    for(currentFloor; currentFloor >=  document.getElementById("targetFloor").value ; currentFloor--){
         if(currentFloor > document.getElementById("targetFloor").value){
             document.getElementById("stateLift").append(" Down")
     
        }else if(currentFloor == document.getElementById("targetFloor").value){
             document.getElementById("stateLift").append(" Stop")
             break;
            alert("ถึงแล้ว");
        }
    }
}
