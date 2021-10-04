moustacheX=0;
moustacheY=0;
function preload(){
    man_moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    }
     function setup(){
         canvas=createCanvas(300,300);
         canvas.center();
         video=createCapture(VIDEO);
         video.size(300,300);
         video.hide();
         poseNet = ml5.poseNet(video, modelLoaded);
         poseNet.on('pose' , gotPoses);
     }
     function modelLoaded(){
         console.log('PoseNet Is Initialized');
     }
     function gotPoses(results)
     {
         if(results.length > 0)
         {
             console.log(results);
             noseX = results[0].pose.moustache.x;
             noseY = results[0].pose.moustache.y;
             console.log("moustache x = " + moustacheX);
             console.log("moustache y = " + moustacheY);
             console.log("moustache x = " + results[0].pose.moustache.x);
             console.log("moustache y = " + results[0].pose.moustache.y); 
         }
     }
     function draw(){
         image(video, 0, 0, 300, 300);
      
         image(man_moustache, moustacheX, moustacheY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
