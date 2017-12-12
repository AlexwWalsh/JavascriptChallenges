class Car {
    constructor(){
        this.wheels = 4
        this.modelYear = 2007
        this.lights = "off"
        this.turnSignal = "off"
        this.speed = 0
    }
    powerLights(power) {
        if (power === "off"){
        this.lights = "off"
        } else if (power === "on") {
        this.lights = "on"
        } else {
            return "No lights present"
        }
    }
    signal(direction) {
        if (direction === "left"){
        this.turnSignal = "left"
    } else if (direction === "right") {
        this.turnSignal = "right"
        } else {
            return "Turn signal off"
        }
    }
    acceleration(fast){
        this.speed += fast
            }
    deceleration(slow){
        if (this.speed > 0){
        this.speed -= slow
    } else if (this.speed <=0) {
        return "Car is fully stopped!"
        }
    }
}
var w = window.innerWidth;
var tesla = document.getElementById("tesla");
var toyota = document.getElementById("toyota");
var tata = document.getElementById("tata");
function dragRace() {
    var speed = 0;
    let teslaSpeed = setInterval(frame, 1);
     function frame(){
    if(tesla == w){
        alert("Winner: Tesla");
    }else{
    speed+=(Math.random()*Math.random()*7);
    tesla.style.top = speed + '20'
    tesla.style.left= speed + 'px'

         }

    }
    var zoom = 0;
    let toyotaSpeed = setInterval(frame2, 1);
     function frame2(){
    if(toyota == w){
        alert("Winner: Toyota");
    }else{
    zoom+=(Math.random()*Math.random()*7);
    toyota.style.top = zoom + '2'
    toyota.style.left= zoom + 'px'
        }
    }
    var mph = 0;
    let tataSpeed = setInterval(frame3, 1);
     function frame3(){
    if(tata == w){
        alert("Winner: Tata");
    }else{
    mph+=(Math.random()*Math.random()*7);
    tata.style.top = mph + '2'
    tata.style.left= mph + 'px'
        }
    }

}







// module.exports = Car;
//
// class Tesla extends Car{
//     constructor(){
//         super()
//         this.modelYear = "1997"
//     }
// }
//
// var myTesla = new Tesla
//
//
//
//
//
// //Class Car is created and given the attribute of 4 wheels.
//
//
// var myCar = new Car
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class Toyota extends Car{
//     constructor(){
//         super()
//     }
// }
//
// var myToyota = new Car
//
//
//
// class Tata extends Car{
//     constructor(){
//         super()
//     }
// }
//
// var myTata = new Car
