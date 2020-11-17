var audioContent = '{'+
  '"Audios" : ['+
    '{"audio":"mediaContent/audioOne.wav"},'+
    '{"audio":"mediaContent/audioTwo.wav"},'+
    '{"audio":"mediaContent/audioThree.wav"}'+
  ']'+
'}';

var obj = JSON.parse(audioContent);

//this line is for accessing a single object

// document.getElementById("demo").innerHTML =
// obj.Audios[1].audio;
// console.log(obj.Audios[1].audio);

for (i = 0; i < 3; i++) {
  console.log(obj.Audios[i].audio);
  //this is what we are going to apply using our method

  // var link = document.createElement("a");
  // link.download = obj.Audio[i].audio;
  // link.href= obj.Audio[i].audio;
  // link.click();  


  //then here we will update the progress bar, updating the value is the idea here
}
