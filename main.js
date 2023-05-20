function startClassification()

{
    naviugator.mediaDevices.getUserMedia({audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
    classifer.classify(gotResult);
}