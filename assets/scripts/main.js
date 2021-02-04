let volume = 100;
let number = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let image = document.getElementById("volume-image");
let sound = document.getElementById("horn-sound");
let button = document.getElementById("honk-btn");
let air = document.getElementById("radio-air-horn")
air.addEventListener("change",function(){sound.src="./assets/media/audio/air-horn.mp3"})
let car = document.getElementById("radio-car-horn")
car.addEventListener("change",function(){sound.src="./assets/media/audio/car-horn.mp3"})
let party = document.getElementById("radio-party-horn")
party.addEventListener("change",function(){sound.src="./assets/media/audio/party-horn.mp3"})



slider.addEventListener("input",sliderchange);
number.addEventListener("input",numberchange);

button.addEventListener("click",function(Event){
    Event.preventDefault();
    sound.play()
})
function sliderchange(){
    volume = slider.value;
    number.value = volume;
    /*if(volume>100){
        volume=100
    }
    if(volume<0){
        volume= 0
    }*/
    sound.volume = volume/100;
    if(volume>=67){
        image.src="./assets/media/icons/volume-level-3.svg"
        button.disabled=false
    }
    else if(volume<=33 && volume>=1){
        image.src="./assets/media/icons/volume-level-1.svg"
        button.disabled=false
    }
    else if(volume==0){
        image.src="./assets/media/icons/volume-level-0.svg"
        button.disabled=true
    }
    else{
        image.src="./assets/media/icons/volume-level-2.svg"
        button.disabled=false

    }
    
}
function numberchange(){
    volume = number.value;
    
    if(volume>100){
        volume=100
    }
    if(volume<0 || volume==""){
        volume= 0
    }
    slider.value = volume;
    sound.volume = volume/100;
    if(volume>=67){
        image.src="./assets/media/icons/volume-level-3.svg"
        button.disabled=false
    }
    else if(volume<=33 && volume>=1){
        image.src="./assets/media/icons/volume-level-1.svg"
        button.disabled=false
    }
    else if(volume==0){
        image.src="./assets/media/icons/volume-level-0.svg"
        button.disabled=true
    }
    else{
        image.src="./assets/media/icons/volume-level-2.svg"
        button.disabled=false

    }
    
}