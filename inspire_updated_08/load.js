
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
              window.location.assign("pages/home.html");

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
             console.log("Acquired!");
             if(getobj.result.val == '0'){ //first time.
               console.log("Welcome New user!");

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
               loadHomeScreen();
             }
          } else {
             console.log("Couldn't be found in database!");
          }
       };
db.close();
  };


}

$("#indexBody").ready(function() {

readDB();


});
