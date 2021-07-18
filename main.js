//https://teachablemachine.withgoogle.com/models/-P9tqlov0/ - (Teachable Link)
var prediction="";
Webcam.set ({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("ML5 Version - ",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-P9tqlov0/.json",modelLoaded);
function modelLoaded() {
    console.log("Model Loaded");
}
function speak() {
    var synth=window.speechSynthesis;
    var speak_data="The First Prediction is "+prediction;
    var utterthis=new SpeechSynthesisUtterance(prediction);
    synth.speak(utterthis);
}