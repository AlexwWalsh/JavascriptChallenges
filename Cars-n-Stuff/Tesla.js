// const Car = require('./MainCar');
//
// class Tesla extends Car{
//
//
// }
// let carTesla = new Tesla

// document.getElementById("button1").onclick = function() {dragRace()};


function dragRace() {
    var tesla = document.getElementById("tesla");
    var toyota = document.getElemetById("toyota");
    var tata = document.getElemetById("tata");
    var speed = 0;
    let teslaSpeed = setInterval(frame, 1);
    function frame(){
    if(speed == 400){
        clearInterval(teslaSpeed);
    }else{
    speed++;
    tesla.style.top = teslaSpeed + "px";
    tesla.style.left= teslaSpeed + "px";

        }
    }
}
