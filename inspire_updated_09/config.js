$("#btnToLink").click(function() {//Listening for a click event in LoadContent.html
  initiateDownloads();
});

function loadDownloadPage(){ //calls the page to prompt use to download content, (Calls the initiateDownloads func.)
             window.location.assign("pages/loadContent.html");
}

function initiateDownloads() { //Initialise download object and downloads content., calls loadHomeScreen.
  var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"https://github.com/inspirelabs-inspirelearn/simpleSideProject/blob/main/audioTwo.mp3"},'+
    '{"mediaFile":"https://github.com/inspirelabs-inspirelearn/simpleSideProject/blob/main/videoOne.mp4"}'+
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
