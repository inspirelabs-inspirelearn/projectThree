
function loadHomeScreen(){

            setTimeout(loadThePages, 1500);
            function loadThePages(){
              window.location.assign("pages/home.html");
              
            }

            //window.location.assign("pages/home.html");
}
// function gotoWisdom(){
//     window.location.assign("wisdom.html");
// }
// function gotoStudy(){
//     window.location.assign("study.html");
// }
// function gotoHome(){
//     window.location.assign("home.html");
// }

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 3500);
// }



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
