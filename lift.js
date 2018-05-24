var maxWeigthLift = 1000;


function startProgram() {
    checkWiegthOverload();
   // console.log(checkWiegthOverload())
    
}

function checkWiegthOverload(){
  if(document.getElementById("personWeight").value > maxWeigthLift) {
      document.getElementById("stateLift").innerHTML = "Stop";
  }
}