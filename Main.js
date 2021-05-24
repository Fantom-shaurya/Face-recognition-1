Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
Webcam.attatch('#camera')
function capture_recognise(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML='<img src="'+data_uri+'"id="image">'
        
        
    })

}
console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rn_c8F1ts/model.json",model_loaded);