var SpeechRecognition = window.webkitSpeechRecognition; 
var Recognition = new SpeechRecognition(); 

function Start() { 
    document.getElementById("text-Box").innerHTML = ""; 
    Recognition.start(); 
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text-Box").innerHTML = content;
    console.log(content);
   /* if (content == "take my selfie"){
        console.log("TakingSelfie");
        speak();
    }*/
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    text = document.getElementById("text-Box").value;
    //speak_data = document.getElementById("text-Box").value;//
    if (text == "take my selfie"){
        speak_data = "Taking selfie in 5 seconds";
        setTimeout(function(){
            takeSnapshot();
            Save();
        },5000);
    }
    else{
        speak_data = "Sorry, Didn't get you";
    }

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    
    Webcam.attach(camera);
}

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="SnapShot" src="' + data_uri + '">'
    });
}

camera = document.getElementById("Camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_Quality:90
});

function Save(){
    link = document.getElementById("Link");
    image = document.getElementById("SnapShot").src;
    link.href = image;
    link.click();
}