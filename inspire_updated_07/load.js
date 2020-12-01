
function loadHomeScreen(){

            setTimeout(loadThePages, 1500);
            function loadThePages(){
              window.location.assign("pages/home.html");
              
            }

            //window.location.assign("pages/home.html");
}

document.getElementById("btnToLink").addEventListener("click", initiateDownloads);

function initiateDownloads() {
  var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"mediaContent/audioTwo.mp3"},'+
    '{"mediaFile":"mediaContent/videoOne.mp4"}'+
  ']'+
'}';

var obj = JSON.parse(mediaContent);

var creatLink = document.getElementById("theDownloadLink");
document.getElementById("firstDisplay").style="display: none";
document.getElementById("secondDisplay").style="display: block";
  

var theprogressvalue = 0;
var ObjectLength = obj.contentObject.length;
theprogressvalue = 100 / ObjectLength;
  
  for (i = 0; i < ObjectLength; i++) {
    // creatLink = obj.contentObject[i].mediaFile;
    creatLink.download = obj.contentObject[i].mediaFile;
    creatLink.href= obj.contentObject[i].mediaFile;
    creatLink.click();
    document.getElementById("theProgress").style="width: "+theprogressvalue+"%";

  }
  console.log("hello there!!! it is finally working");
}



$("#indexBody").ready(function() {

//   var firstVideo = document.getElementById("firstVideo");
//   var sdcard = navigator.getDeviceStorage("videos");
//   request=sdcard.get("videoone.mp4");
//   request.onsuccess = function () {
//     var file = request.result;
//   document.getElementById('GFG').innerHTML = file.name;
//     firstVideo.src = window.URL.createObjectURL(file);
//     firstVideo.play();
// }
    // console.log("this is working");

     loadHomeScreen();


});



// document.addEventListener("load", loadHomeScreen);
// document.getElementById("indexBody").addEventListener("ready", loadHomeScreen);


//event listeners
// document.getElementById("wisdom").addEventListener("focus", gotoWisdom);
// document.getElementById("study").addEventListener("focus", gotoStudy);
// document.getElementById("home").addEventListener("focus", gotoHome);
