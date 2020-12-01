
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
  loadHomeScreen();
}
loadDownloadPage(){
             window.location.assign("pages/loadContent.html");
}


$("#indexBody").ready(function() {
     
     //loadHomeScreen();
       loadDownloadPage();


});



// document.addEventListener("load", loadHomeScreen);
// document.getElementById("indexBody").addEventListener("ready", loadHomeScreen);


//event listeners
// document.getElementById("wisdom").addEventListener("focus", gotoWisdom);
// document.getElementById("study").addEventListener("focus", gotoStudy);
// document.getElementById("home").addEventListener("focus", gotoHome);
