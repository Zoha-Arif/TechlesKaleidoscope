var rooms = {
    "con1": "email", 
    "con2": "contact", 
    "con3": "hello", 
    "con5": "show", 
    "con4": "goodbye", 
    "con6": "pronunciation",
    "room1": "To contact me, email the.techles.kaleidoscope@gmail.com. ", 
    "room2": "Hello. I am Mango. ", 
    "room3": "Goodbye. I hope you come back soon. ", 
    "room4": "You pronounciation my name, 'Mango', like 'Man - Joe', not like 'mang - go' the fruit."
    
}

$(document).ready(function(){
    var j = 1; 
    var h = 2; 
    var v = 3; 
    var s = 4; 
    $(document).keypress(function(key){
        var input1 = $('#play1').val().toLowerCase();
        if (key.which == 13){
            if (input1.includes(rooms["con" + j])){ 
                var i = 0;
                var w = 1; 
                var txt = (rooms["room1"]); /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */

                //This function is attributed to W3 Schools!//
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("command").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }
                }
                typeWriter.call(); 
            }
            else if (input1.includes(rooms["con" + h])){ 
                    var i = 0;
                    var w = 1; 
                    var txt = rooms["room1"]; /* The text */
                    var speed = 30; /* The speed/duration of the effect in milliseconds */
    
                    //This function is attributed to W3 Schools!//
                    function typeWriter() {
                        if (i < txt.length) {
                        document.getElementById("command").innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter.call(); 
            } 
            else if (input1.includes(rooms["con" + v])){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room2"]; /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */

                //This function is attributed to W3 Schools!//
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("command").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }
                }
                typeWriter.call(); 
        } 
        else if (input1.includes(rooms["con" + s])){ 
            var i = 0;
            var w = 1; 
            var txt = rooms["room3"]; /* The text */
            var speed = 30; /* The speed/duration of the effect in milliseconds */

            //This function is attributed to W3 Schools!//
            function typeWriter() {
                if (i < txt.length) {
                document.getElementById("command").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
                }
            }
            typeWriter.call(); 
    } 
    else if (input1.includes(rooms["con6"])){ 
        var i = 0;
        var w = 1; 
        var txt = rooms["room4"]; /* The text */
        var speed = 30; /* The speed/duration of the effect in milliseconds */

        //This function is attributed to W3 Schools!//
        function typeWriter() {
            if (i < txt.length) {
            document.getElementById("command").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
            }
        }
        typeWriter.call(); 
} 
    else if (input1.includes(rooms["con5"])){ 
        var commands = ["hello", "goodbye", "email", "contact", "pronunciation"];
        function showHelp(){
            $("#command").append("<p>Here are your complete list of commands: </p>"); 
            $("#command").append("<ul>"); 
            for (var l = 0; l < commands.length; l++){
                $("#command").append("<li>" + commands[l] + "</li>"); 
            }
            $("#command").append("</ul>"); 
        }

        showHelp.call(); 
    }
            else {
                var i = 0;
                var txt = "Uh oh, you can't execute that command. For a full list of commands type in 'show help'"; /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */

                //This function is attributed to W3 Schools!//
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("command").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }
                }
                typeWriter.call(); 
            }
        }
    })
})