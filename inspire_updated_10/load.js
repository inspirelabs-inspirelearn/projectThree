
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction ||
window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
window.msIDBKeyRange

const moduleData_ = [
   { id: "01", name: "Biology", reading: "None"},
   { id: "02", name: "English", reading: "32"}
];



if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

function loadHomeScreen(){

            setTimeout(loadThePages, 1500);
            function loadThePages(){
              readDB();

              console.log("Mvoing to different page!");

            }

            //window.location.assign("pages/home.html");
}


function readDB() {
  var db;
  var request = window.indexedDB.open("InspDB", 1);

  request.onerror = function(event) {
     console.log("error: ");
  };

  request.onupgradeneeded = function(event) {
     var db = event.target.result;
     var appData = db.createObjectStore("AppData",{keyPath:"id"});
     var moduleData = db.createObjectStore("ModuleData",{keyPath:"id"}); //holds data for modules such as current reading getActiveNavItemIndex
      //the data for running the AppData
      for (var i in moduleData_) {
         moduleData.add(moduleData_[i]);
      }
     appData.add( { id: "_beginner_", val: "0"});// this is the first time the database is being created

  }
  request.onsuccess = function(event) {
     db = request.result;
     console.log("success: "+ db);
     // console.log("Results:"+db);
       var transaction = db.transaction(["AppData"],"readwrite");
       var objectStore = transaction.objectStore("AppData");
       var getobj = objectStore.get("_beginner_");

       getobj.onerror = function(event) {
          console.log("Unable to retrieve daa from database!");
       };

       getobj.onsuccess = function(event) {
          // Do something with the request.result!
          if(getobj.result) {
             console.log("Acquired! "+getobj.result.val);
             if(getobj.result.val == '0'){ //first time.
               console.log("Welcome New user!");
               $("#indexBody").empty();
               $("#indexBody").append(loadContentPage);
               // document.getElementById("btnToLink").addEventListener("click", initiateDownloads);
               document.addEventListener('keydown', handleKeydown);

               //after initialisation
              var buffer =getobj.result;
              buffer.val = "1";
              var updateEdit = objectStore.put(buffer);
              updateEdit.onerror = function(event){
                console.log("Failed to make update!");
              }
              updateEdit.onsuccess =  function(event){
                console.log("User recorded!");
              }
             }
             else{
               console.log("Welcome back!");
               window.location.assign("pages/home.html");
             }
          } else {
             console.log("Couldn't be found in database!");
          }
       };
db.close();
  };


}
// $("#btnToLink").click(function() {//Listening for a click event in LoadContent.html
//   initiateDownloads();
// });

function loadDownloadPage(){ //calls the page to prompt use to download content, (Calls the initiateDownloads func.)
             window.location.assign("pages/loadContent.html");
}
function initiateDownloads() { //Initialise download object and downloads content., calls loadHomeScreen.
  console.log("Initiating downlaods!");
  var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"https://inspirelabs-inspirelearn.github.io/externalSourcer/mediaContent/audioTwo.mp3"},'+
    '{"mediaFile":"https://inspirelabs-inspirelearn.github.io/externalSourcer/mediaContent/videoOne.mp4"}'+
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
    console.log("Downloading !!"+ i);
    // creatLink = obj.contentObject[i].mediaFile;
    creatLink.download = obj.contentObject[i].mediaFile;
    creatLink.href= obj.contentObject[i].mediaFile;
    creatLink.click();
    document.getElementById("theProgress").style="width: "+theprogressvalue+"%";

  }

  window.location.assign("pages/home.html");
  // console.log("Moving jto home!");
}

$("#indexBody").ready(function() {

loadHomeScreen();


});


var overlayTimeout;
function handleKeydown(e) {
  // enable key overlay
  // keyOverlay.style.display = 'block';
  // keyOverlay.innerHTML += '<span>' + e.key + '</span>';
  console.log('Button pressed:', e.key);

  // clear overlay
  clearTimeout(overlayTimeout);
  overlayTimeout = setTimeout(function () {
    // keyOverlay.innerHTML = ' ';
    // keyOverlay.style.display = 'none';
  }, 1000);

  switch (e.key) {
    case 'Enter':
      initiateDownloads(); // prevent the app from closing
      break;
}
}

var loadContentPage= $('<br><br><center>\
  <div id="firstDisplay">\
    <div style="border:1px solid rgba(0,0,0,0.2);border-radius:8px;width:80%;" >\
                    <br>\
                    <p id="para" style="color:rgb(0,0,0)">We are about to download the necessary files into the app.</p>\
                    <button class="w3-btn w3-red" id="btnToLink" >continue</button>\
                    <br><br>\
                    <a id="theDownloadLink" style="display:none;">link will download here</a></center>\
            </div>\
  </div>\
  <div id="secondDisplay">\
    <div id="displayProgress" style="display: none;">\
            <center>\
                    <div class="w3-progress-container" style="background-color:rgb(102, 102, 102);height:14px;width:96%;margin-top:4px;">\
                            <div class="w3-progressbar" id="theProgress" style="background-color:rgb(134, 145, 230);width:0%;color:rgb(194, 18, 18);"></div>\
                    </div>\
            </center>\
    </div>\
  </div>\
\
</center>');


