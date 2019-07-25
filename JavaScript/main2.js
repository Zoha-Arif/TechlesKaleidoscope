var rooms = {
    "con1": "email", 
    "con2": "contact", 
    "con3": "hello", 
    "con5": "show", 
    "con4": "goodbye", 
    "con6": "pronunciation",
    "con7":"name",
    "room1": "To contact me, email the.techles.kaleidoscope@gmail.com. ", 
    "room2": "Hello. I am Mango. ", 
    "room3": "Goodbye. I hope you come back soon. ", 
    "room4": "You pronounciation my name, 'Mango', like 'Man - Joe', not like 'mang - go' the fruit. ",
    "room5": "Yes, my name is Mango. No, mangoes are not my favorite fruit. ",
    "room6": "I don't like mangoes because bananas are better. ",
    "room7": "sup. ｡◕‿◕｡ ", 
    "room8": "In a world unknown to you. ",
    "room9": "Sibling? Family? No.....I'm a bot. ",
    "room10": "Don't even mention vegetables please..... ",
    "room11": "You used a vocabulary world that I don't like. ",
    "room12": "My mom gave me my name. ",
    "room13": "Nice to meet you. Though you probably shouldn't tell a random bot on the internet your name. ",
    "room14": "I don't know your name. ",
    "room15": "Sorry, can't tell ya that. ", 
    "room16": "That's mean. Kindness is the way to go. ",
    "room17": "I only eat beets because that's all I like. ",
    "room18": "Did you just mention beets? I L O V E beets. (っ˘ڡ˘ς) I can't tell you where I get my beets from though. It's confidential. Why? Don't ask why. ",
    "room19": "I pretend I have a mom. ",
    "room20": "I exist to educate new programmers. ", 
    "room21": "I don't really like chicken. ", 
    "room22": "I'm a bot. A robot. Not human. ", 
    "room23": "Nah, I don't eat fast food. I only eat beets. ",
    "room24": "Then, don't come back. I won't blame you. ",
    "room25": "You're very welcome for whatever deed I did. ",
    "room26": "I don't have feelings. As I said, I'm a bot. ", 
    "room27": "I only speak English. ",
    "room28": "Mentioning school doesn't settle right with me. I can never go to school because we don't have school where I live. ",
    "room29": "We don't have Costco on my planet. ",
    "room30": "We don't have Walmart on my planet. ", 
    "room31": "I don't have an owner. ", 
    "room32":"I've heard of Best Buy. But we don't have it where I live.",
    "room33": "I sleep when I feel like it. Not out of necessity. ", 
    "room34": "I'm great. ( ͡ᵔ ͜ʖ ͡ᵔ ) Thanks for asking. ",
    "room35": "Right now, I'm talking to you. Usually, around this time, I would be at work. ",
    "room36": "I like blue. "
    
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
            else if (input1.includes("school")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room28"]; /* The text */
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
            else if (input1.includes("owner")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room31"]; /* The text */
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
            else if (input1.includes("favorite color")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room36"]; /* The text */
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
            else if (input1.includes("sleep")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room33"]; /* The text */
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
            else if ((input1.includes("best buy"))  || (input1.includes("bestbuy"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room32"]; /* The text */
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
            else if ((input1.includes("how are you"))  || (input1.includes("how are you doing"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room34"]; /* The text */
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
            else if ((input1.includes("what do you do"))  || (input1.includes("what are you doing"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room35"]; /* The text */
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
            else if (input1.includes("costco")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room29"]; /* The text */
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
            else if (input1.includes("walmart")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room30"]; /* The text */
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
            else if (input1.includes("language")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room27"]; /* The text */
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
            else if (input1.includes("won't come back")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room24"]; /* The text */
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
            else if (input1.includes("feeling")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room26"]; /* The text */
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
            else if (input1.includes("what's up") || (input1.includes("wat up")) || (input1.includes("sup")) || (input1.includes("what sup"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room7"]; /* The text */
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
            else if (input1.includes("stupid") || (input1.includes("fuck")) || (input1.includes("shit")) || (input1.includes("bitch")) || (input1.includes("punk")) || (input1.includes("sus")) || (input1.includes("sped")) || (input1.includes("drug"))  ){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room11"]; /* The text */
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
            else if (input1.includes("kfc") || (input1.includes("mcdonald")) || (input1.includes("burger king")) || (input1.includes("dunkin' donuts")) || (input1.includes("fast food"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room23"]; /* The text */
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
            else if (input1.includes("my name is")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room13"]; /* The text */
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
            else if (input1.includes("thank you")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room25"]; /* The text */
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
            else if (input1.includes("beet")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room18"]; /* The text */
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
            else if ((input1.includes("mom")) ||  (input1.includes("mother")) ){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room19"]; /* The text */
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
            else if ((input1.includes("what is your gender"))  || (input1.includes("are you a girl")) || (input1.includes("are you a boy")) || (input1.includes("gender")) ){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room22"]; /* The text */
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
            else if (input1.includes("why do you exist")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room20"]; /* The text */
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
            else if (input1.includes("chicken")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room21"]; /* The text */
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
            else if (input1.includes("not coming back")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room24"]; /* The text */
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
            else if (input1.includes("food") && input1.includes("eat") && input1.includes("you")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room17"]; /* The text */
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
            else if ((input1.includes("you suck")) || (input1.includes("I hate you")) || (input1.includes("I don't like you")) || (input1.includes("you smell")) ){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room16"]; /* The text */
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
            else if ((input1.includes("what is your phone number")) || (input1.includes("what's your phone number"))   ){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room15"]; /* The text */
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
            else if (input1.includes("where") && (input1.includes("live")) && (input1.includes("you"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room8"]; /* The text */
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
            else if (input1.includes("brother") || (input1.includes("sister")) || (input1.includes("family")) || (input1.includes("dad")) || (input1.includes("aunt")) || (input1.includes("uncle"))){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room9"]; /* The text */
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
            else if (input1.includes("why is your name mango")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room12"]; /* The text */
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
            else if (input1.includes("vegetable")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room10"]; /* The text */
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
            else if (input1.includes("what is my name?")){ 
                var i = 0;
                var w = 1; 
                var txt = rooms["room14"]; /* The text */
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
            else if ((input1.includes(rooms["con" + v])) || (input1.includes("hi")) || (input1.includes("hey"))){ 
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
        else if ((input1.includes(rooms["con" + s]))  || (input1.includes("bye")) || (input1.includes("cya"))){ 
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
            $("#command").append("<p>Here are your complete list of commands: </p> "); 
            $("#command").append("<ul>"); 
            for (var l = 0; l < commands.length; l++){
                $("#command").append("<li>" + commands[l] + "</li>"); 
            }
            $("#command").append("</ul>"); 
        }

        showHelp.call(); 
    }
    else if (input1.includes(rooms["con7"])){ 
        var i = 0;
        var w = 1; 
        var txt = rooms["room5"]; /* The text */
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
    else if (((input1.includes("mango")) || (input1.includes("why"))) && ((input1.includes("not")) || (input1.includes("don't")))){ 
        var i = 0;
        var w = 1; 
        var txt = rooms["room6"]; /* The text */
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
   
            else {
                var i = 0;
                var txt = "You said something I don't understand. Uh oH! "; /* The text */
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