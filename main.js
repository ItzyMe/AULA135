var status=""
objects=[]
function preload(){
    video=createVideo("video.mp4")
    video.hide()
}

function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);  
    document.getElementById("status").innerHTML="Status: detectando objetos"
}

function modelLoaded(){
    console.log("Modelo  COCOSSD foi carregado")
video.loop()
video.speed(1)
video.volume(0)
}

function gotResult(error,results){
    if(error){
console.log(error)
    }

console.log(results)
objects=results
}

function draw(){
    image(video,0,0,480,380)
    if(status!=""){
        objectDetector.detect(video,gotResult)
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Objeto DETECTADO"
        document.getElementById("number_of_objects").innerHTML="Número de objetos DETECTADOS é:  " +objects.length
     fill("#FF0000")
     porcentagem=floor(objects[i].confidence*100)
     text(objects[i].label+""+porcentagem+": %",objects[i].x+15,objrcts[i].y+15 )
     noFill()
     stroke("#FF0000")
     rect (objects[i].x, objects[i].y,objects[i].width, objects[i].height)

        }

    }

}