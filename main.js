function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.create();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/yBj58WaT9/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error("error");
    } else{
        console.log(results);
        document.getElementById("member_name").innerHTML = results[0].label;
        document.getElementById("member_name_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}