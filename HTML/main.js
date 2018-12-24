$(document).ready(function(){

var i = 0;
var txt = "A K-Type Analog-Humanoid Node Geo-electronic bot. I’ve lived in a realm known as \
the Techles Kaleidoscope for centuries toiling to uncover \
a method to contact other realms. I finally fused my research together and was able to \
create this portal between the realm of the kaleidoscope and earth. I now use this portal \
to forward my knowledge of machine learning to young computer scientists around the world. \
I hope you feel welcomed and find my lessons enlightening."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
    
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("introduction").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    var h = i + 1; 
    if (h == txt.length){
        var x = document.getElementById("cursor");
        x.style.display = "block";
    }
}

typeWriter.call(); 

})

var cursor = true;
var speed = 220;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);