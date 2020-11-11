//global module
var MODULE = (function () {
  var app = {};
  // use the custom module namespace 'app' for all variables and functions you need to access through other scripts
  app.views = new Array();
  app.activeNavItem = null;

  app.activeNavItemHorizontal = null; //for horizontal scrolling
  app.currentView = null;
  app.currentViewID = 0;
  app.currentViewName = '';
  app.prevViewId = 0;
  app.currentNavId = 10;
  app.currentNavIdHorizontal = 0; //for horizontal scrolling
  app.navItems = new Array();
  app.hozIndex= 0;
  app.backEnabled = true;
  app.horizontalScroll = true; //will deny to accept enter key strokes when horizontal navigation is on
  // app.optionEnabled = false;
  // app.fullAdVisible = false;
  app.primaryColor = '#602f6b';
  // app.optionButtonAction = '';

  // app.backButton = document.getElementById("bar-back");
  // app.actionButton = document.getElementById("bar-action");
  // app.optionsButton = document.getElementById("bar-options");

  // utton input
  app.keyCallback = {
    dUp: function () { navVertical(false); },
    dDown: function () { navVertical(true); },
    dLeft: function () { navHorizontal(false); },
    dRight: function () { navHorizontal(true); },
    softLeft: function () { goBack(); },
    // softRight: function () { executeOption(); },
    enter: function () { execute(); },
    menu: function () { },
    back: function () { goBack(); },
    quit: function () { },
    other: function () { }
  };

  // startup
  window.addEventListener("load", function () {
    var viewRoot = document.getElementById("views");
    app.views = viewRoot.querySelectorAll('.view');
    // load first view
    // console.log(app.views);
    app.horizontalScroll =false; //horizontal scrolling disbaled sto suppeort on enter event
    showView(0);
    initView();
  });

  // vertical navigation in increments of 10
  function navVertical(forward) {
    app.horizontalScroll = false; //allow enter button to execute procedures of the vertical indexes when pressed
      app.updateNavItems();
      // jump to tabIndex

      var next = app.currentNavId;


      next += forward ? 10 : -10;
      // if (next > getNavTabIndex(app.navItems.length - 1)) {
      //   // if larger than last index
      //   next = next % 10;
      //   // try to stay in same column
      //   if (app.navItems[next]) {
      //     focusActiveButton(app.navItems[next]);
      //   }
        // else {
        //   focusActiveButton(app.navItems[0]);
        // }
      // }
      // else if (next < 0) {
      //   // if smaller than 0
      //   var lastTab = getNavTabIndex(app.navItems.length - 1);
      //   var rowIndex = parseInt(Math.floor(lastTab * 0.1) * 10);
      //   // try to stay in same column
      //   var columnIndex = (next + 10) % 10;
      //   next = rowIndex + columnIndex;
      //   for (var i = 0; i < app.navItems.length; i++) {
      //     if (getNavTabIndex(i) == next) {
      //       focusActiveButton(app.navItems[i]);
      //       break;
      //     }
      //   }
      // }

      // else {
        // var found = false;
          for (var i = 0; i < app.navItems.length; i++) {
            // if(current.location =="home.html" && next > getNavTabIndex(app.navItems.length - 1)){ next=0;}
            if (getNavTabIndex(i) == next) {
              focusActiveButton(app.navItems[i]);
              // found = true;
              break;
            }
          }




        // if (!found) {
        //   // nothing found, try start of next row
        //   var round = Math.floor(next / 10) * 10;
        //   for (var i = 0; i < app.navItems.length; i++) {
        //     if (getNavTabIndex(i) == round) {
        //       focusActiveButton(app.navItems[i]);
        //       found = true;
        //       break;
        //     }
        //   }
        // }
      // }

  };

  // horizontal navigation in increments of 1
  function navHorizontal(forward) {
    var currentlocation=window.location.pathname; //for assisting horizontal navigation and enter event procdeures
    currentlocation=currentlocation.substring(currentlocation.lastIndexOf('/') + 1);
    if(currentlocation == "home.html"){ //if the screen the homepage for horizontal scrolling
      app.horizontalScroll = true; //will prevent from accepting the enter keystroke
      app.updateNavItemsHorizontal();
    // app.navItems[1].focus();

      // jump to array index for continuous horizontal navigation
      var currentTabIndex = app.currentNavIdHorizontal;
      for (var i = 0; i < app.navItemsHorizontal.length; i++) {
        if (getNavTabIndexHorizontal(i) == currentTabIndex) {
          // app.activeNavItemHorizontal.style.backgroundColor = app.primaryColor;
          var next = i;
          next += forward ? 1 : -1;
          // if (next >= app.navItemsHorizontal.length) {
          //   next = 0;
          // }
          // else if (next < 0) {
          //   next = app.navItemsHorizontal.length - 1;
          // }
          focusActiveButtonHorizontal(app.navItemsHorizontal[next]);
          break;
        }
      }
    }
  };

  function getNavTabIndex(i) {
    return parseInt(app.navItems[i].getAttribute('tabIndex'));
  };

  function getNavTabIndexHorizontal(i) {
    return parseInt(app.navItemsHorizontal[i].getAttribute('tabIndex'));
  };

  function focusActiveButton(element) {
    app.activeNavItem = element;
    app.currentNavId = parseInt(app.activeNavItem.getAttribute('tabIndex'));

    // scroll to top
    if (app.currentNavId == 10) {
      try {
        app.currentView.scrollTo(0, 0);
      } catch (e) { }
    } else {
      // smooth scrolling into view
      app.activeNavItem.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    app.activeNavItem.focus();
    // update softkeys
    // softkeyBar();
  };

  function focusActiveButtonHorizontal(element) {
    app.activeNavItemHorizontal = element;
    app.currentNavIdHorizontal = parseInt(app.activeNavItemHorizontal.getAttribute('tabIndex'));
    // app.currentNavItemHorizontal

    // scroll to top
    if (app.currentNavIdHorizontal == 0) {
      try {
        app.currentView.scrollTo(0, 0);
      } catch (e) { }
    } else {
      // smooth scrolling into view
      app.activeNavItemHorizontal.scrollIntoView({ behavior: "smooth" });
    }

    for (var i = 0; i < app.navItemsHorizontal.length; i++) {

        app.navItemsHorizontal[i].style.backgroundColor = '#BAAAAA';
    }
    app.activeNavItemHorizontal.focus();
    // app.activeNavItemHorizontal.style.backgroundColor = app.primaryColor;
    app.activeNavItemHorizontal.style.backgroundColor = app.primaryColor;

    // update softkeys
    // softkeyBar();
  };


  app.getActiveNavItemIndex = function () {
    for (var i = 0; i < app.navItems.length; i++) {
      var found = false;
      if (app.activeNavItem) {
        if (app.activeNavItem.getAttribute('id') == app.navItems[i].getAttribute('id')) {
          found = true;
          break;
        }
      }
    }
    if (found) {
      return i;
    } else {
      return 0;
    }
  }

  // decide, what the enter button does, based on the active element
  function execute() {
    if(!app.horizontalScroll){
        if (app.activeNavItem.getAttribute('data-gotToViewId')) {
          showView(app.activeNavItem.getAttribute('data-gotToViewId'));
          initView();
        } else if (app.activeNavItem.getAttribute('gotoModule')) {
          showViewByName(app.activeNavItem.getAttribute('data_gotoHome'));
          initView();
        }
        else if (app.activeNavItem.getAttribute('data-gotoEnglish')) {
          showViewByName(app.activeNavItem.getAttribute('data-gotoEnglish'));
          // gotoSubject();
          window.location.assign("../pages/topicEnglish.html");
          /*initView();
          /* scrolling page to top
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;*/
        }

        else if (app.activeNavItem.getAttribute('PartsOfSpeech')) {
          showViewByName(app.activeNavItem.getAttribute('PartsOfSpeech'));
          window.location.assign("../pages/parts_of_speech.html");
          console.log("logging function");

        }
        else if (app.activeNavItem.getAttribute('data-gotoBiology')) {
          showViewByName(app.activeNavItem.getAttribute('data-gotoBiology'));
          window.location.assign("../pages/biology.html");
        }

        else if (app.activeNavItem.getAttribute('data-gotoBiologyContent')) {
          showViewByName(app.activeNavItem.getAttribute('data-gotoBiologyContent'));
          window.location.assign("../pages/topicBiology.html");
        }


      // update soft keys
      // softkeyBar();
    }
  };

  function goBack() {
    if (app.backEnabled) {
      // console.log(app.prevViewId);
      window.history.back();

      // showView(app.prevViewId);
      // initView();

    }
  };


  // use the index to navigate to the view
  function showView(index) {
    app.prevViewId = app.currentViewID;
    // switch active view
    for (let i = 0; i < app.views.length; i++) {
      app.views[i].classList.remove('active');
    }
    app.currentView = app.views[index];
    app.currentView.classList.add('active');
    app.currentViewID = index;
    app.currentViewName = app.currentView.getAttribute("id");
    // console.log(app.currentViewID);
    // console.log(app.currentViewName);
  }

  // use the view's name
  function showViewByName(name) {
    app.prevViewId = app.currentViewID;
    var viewIndex = 0;
    // switch active view
    for (let i = 0; i < app.views.length; i++) {
      app.views[i].classList.remove('active');
      // search for name
      if (name == app.views[i].id) {
        viewIndex = i;
      }
    }
    app.currentView = app.views[viewIndex];
    app.currentView.classList.add('active');
    app.currentViewID = viewIndex;
    app.currentViewName = name;
  }

  function openURL(url) {
    var external = url.includes('http');
    if (external) {
      window.open(url, '_blank');
    } else {
      window.location.assign(url);
    }
  }

  function initView() {
    var currentlocation=window.location.pathname; //for assisting horizontal navigation and enter event procdeures
  currentlocation=currentlocation.substring(currentlocation.lastIndexOf('/') + 1);
    app.currentView.scrollTo(0, 0);
    // enable options button
    // enable back button
    // if (currentlocation == "home.html") {
    //   app.backEnabled = false;
    //   app.updateNavItems();
    //   // app.optionEnabled = true;
    //     // focusActiveButton(app.navItems[0]);
    //     // app.navItems[0].focus();
    //   // focusActiveButton(app.navItems[0]);
    //   // app.activeNavItem = app.navItems[0];
    //   // app.currentNavId = parseInt(app.activeNavItem.getAttribute('tabIndex'));
    // }

    // focus first menu entry
    if (app.currentView.querySelector(".navItem")) {
      var linkName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
      if(linkName == "wisdom.html"){
        app.updateNavItems();
        focusActiveButton(app.navItems[1]);
      }

      else if(linkName == "home.html"){
        app.backEnabled = false;
        // app.updateNavItems();
        app.updateNavItems();
        app.updateNavItemsHorizontal();
        focusActiveButton(app.navItems[0]);
        app.navItemsHorizontal[0].style.background= app.primaryColor;

      }
      else if(linkName == "biology.html"){
        app.updateNavItems();
        focusActiveButton(app.navItems[0]);
      }

      else if(linkName == "topicEnglish.html"){
        app.updateNavItems();
        focusActiveButton(app.navItems[0]);
      }
      else if(linkName == "parts_of_speech.html"){
        app.updateNavItems();
        focusActiveButton(app.navItems[0]);
      }
      else if(linkName == "topicBiology.html"){
        app.updateNavItems();
        focusActiveButton(app.navItems[0]);
      }


    }
  };

  // fill navigation array for current view
  app.updateNavItems = function (index) {
    app.navItems = app.currentView.querySelectorAll('.navItem');
  }

  app.updateNavItemsHorizontal = function (index) {
    app.navItemsHorizontal = app.currentView.querySelectorAll('.navItemHorizontal');
  }

  // set soft keys
  function softkeyBar() {
    if (app.backEnabled) {
      // app.backButton.innerHTML = "Back";
      window.history.back();
    }
    // else {
    //   app.backButton.innerHTML = "";
    // }
    // app.actionButton.innerHTML = "SELECT";
    // if (app.isInputFocused()) {
    //   app.optionsButton.innerHTML = "Clear";
    //   // app.optionButtonAction = 'clear';
    // } else if (app.optionEnabled) {
    //   app.optionsButton.innerHTML = "Option";
    //   app.optionButtonAction = 'something';
    // } else {
    //   app.optionsButton.innerHTML = "";
    //   app.optionButtonAction = '';
    // }
  };
  function gotoSubject(){
    // window.location.assign("innerSubject.html")

  // $("headingEnglish").data-position="fixed";
    $("#results").empty();
    $("#results").prepend(englishContent);
    document.getElementById("english_focus").focus();//add focus to element
  }

  function gotoSubject_two(){
    // window.location.assign("innerSubjectTwo.html")
    $("#results").empty();
    $("#results").append(biologyContent);
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  //this is the index variable
  var myIndex = 0;

  //for the image slide show carousel
  function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 3500);
    }



    //homepage content
    $("#homePage_page").ready(function() {




      $("#results").append(homeContent);
      carousel();


      function loadWisdom() {
        $("#results").empty();
        $("#results").append(wisdomContent);
        initView();
        app.horizontalScroll =false;
        app.navItemsHorizontal[0].style.background= '#BAAAAA';
      }
      function loadStudy() {
        $("#results").empty();
        $("#results").append(studyContent);
        initView();
        app.horizontalScroll =false;
        app.navItemsHorizontal[0].style.background= '#BAAAAA';


      }
      function loadHome() {
        // $("#results").empty();
        // $("#results").append(homeContent);
        // carousel();
        location.reload();
      }

      document.getElementById("wisdom").addEventListener('focus', loadWisdom);

      document.getElementById("study").addEventListener('focus', loadStudy);
      document.getElementById("home").addEventListener('focus', loadHome);

    });


  //##media content load startup




    //###############Navigational content

    //########homepage
    var homeContent = $('<div class="active" id="viewList"> \
    <div id="generatedList" class="list"> \
        <div class="navItem row" tabindex="10" style="height:40px;">\
            \
            <center>\
                    <p id="turnWhite" style="font-size:12px;">Welcome Madalo</p>\
            </center>\
        </div>\
        <div class="navItem row"  style="">\
                <div style="width:100%;"><center>\
                        \
                        <img class="mySlides w3-animate-left" src="../img/insp_01.png" style="width:100%;height:100px;border-radius:6px;border:1px solid rgb(255,255,255);">\
                        <img class="mySlides w3-animate-left" src="../img/insp_02.png" style="width:100%;height:100px;border-radius:6px;">\
                        <img class="mySlides w3-animate-left" src="../img/insp_03.png" style="width:100%;height:100px;border-radius:6px;">\
                        <img class="mySlides w3-animate-left" src="../img/insp_04.png" style="width:100%;height:100px;border-radius:6px;"></center>\
                        <img class="mySlides w3-animate-left" src="../img/insp_05.png" style="width:100%;height:100px;border-radius:6px;">\
                        \
                </div>\
                <div id="animatedContent">\
  \
  \
                </div>\
               \
  \
        <div class="navItem row"  >\
            <div class="col-1">\
                    <img src="../img/trianglePink.png" class="" id="trianglePink" style="height:14px;width:14px" />\
  \
            </div>\
            <div class="col-11">\
                    <span style="font-weight:bold;font-size:12px;">English : parts of speech</span><br>\
                    <img src="../img/clock.png" class="fa" style="height:14px;width:14px;" />\
                    <span style="color:rgba(0, 0, 0, 0.6);font-size:12px;font-weight:bold;">2:00 PM</span>\
                    \
  \
            </div>\
  \
        </div>\
    </div>\
  </div>   ');
  //###homepage end


  //#########wisdom content
  var wisdomContent = $('<div class="active" id="viewList">\
  \
  <div id="generatedList" class="list">\
      \
      <div class="navItem row" data-gotoEnglish="viewEnglish" tabindex="10" style="border:1px solid rgba(0,0,0,0.03);">\
                  <div class="col-3" style="padding-top:7px;">\
                      <img src="../img/icon_english.png" style="height:35px;width:35px;" />\
                  </div>\
                  <div class="col-9" style="padding:14px;">\
                      <span style="font-size:16px;font-weight:bold;">English Grammar</span><br>\
                      \
                  </div>\
                  \
      </div>\
      <div class="navItem row" data-gotoBiologyContent="viewBiologyContent" tabindex="20" style="border:1px solid rgba(0,0,0,0.03);">\
          <div class="col-3" style="padding-top:7px;">\
              <img src="../img/icon_biology.png" style="height:35px;width:35px;" />\
          </div>\
          <div class="col-9" style="padding:14px;">\
              <span style="font-size:16px;font-weight:bold;">Biology</span><br>\
              \
          </div>\
          \
  </div>\
  <div class="navItem row" tabindex="30" style="border:1px solid rgba(0,0,0,0.03);">\
      <div class="col-3" style="padding-top:7px;">\
          <img src="../img/icon_physics.png" style="height:35px;width:35px;" />\
      </div>\
      <div class="col-9" style="padding:14px;">\
          <span style="font-size:16px;font-weight:bold;">Physics</span><br>\
          \
      </div>\
      \
  </div>\
  </div>');
  //#########wisdom content end



  //#####study content
  var studyContent = $('<div class="active" id="viewList" ><div id="generatedList" class="list" >\
      <div class="navItem row" data-gotoEnglish="viewEnglish" tabindex="10"  style="border:1px solid rgba(0,0,0,0.03);">\
              <div class="col-3" style="padding-top:7px;">\
                      <img src="../img/icon_english.png" style="height:35px;width:35px;" />\
                  </div>\
                  <div class="col-9" style="padding:14px;">\
                      <span style="font-size:16px;font-weight:bold;">English Grammar</span><br>\
                      \
                  </div>\
                  \
      </div>\
      <div class="navItem row" data-gotoBiologyContent="viewBiologyContent" tabindex="20"  style="border:1px solid rgba(0,0,0,0.03);">\
      <div class="col-3" style="padding-top:7px;">\
              <img src="../img/icon_biology.png" style="height:35px;width:35px;" />\
          </div>\
          <div class="col-9" style="padding:14px;">\
              <span style="font-size:16px;font-weight:bold;">Biology</span><br>\
              \
          </div>\
          \
  </div>\
  <div class="navItem row" data-gotoEnglish="viewEnglish" tabindex="30"  style="border:1px solid rgba(0,0,0,0.03);">\
  <div class="col-3" style="padding-top:7px;">\
          <img src="../img/icon_physics.png" style="height:35px;width:35px;" />\
      </div>\
      <div class="col-9" style="padding:14px;">\
          <span style="font-size:16px;font-weight:bold;">Physics</span><br>\
          \
      </div>\
      \
  </div>\
  </div>');


  //##study content

  //###Navigational end

  //#########biology content
  var biologyContent = $('<div class="active" id="viewList">\
  <div id="generatedList" class="list" style="text-align:center;">\
      <div class="row"><center>\
          <h4 style="font-weight: bold;color:#990033;">Biology</h4>\
          <p style="font-size:13px;font-weight:bold;color:#990033;">Reading: Topic 3</p>\
          </center>\
      </div>\
      <div class="navItem row" data-gotoSubjectBiology="viewBiology" tabindex="10">\
              <span style="font-size:14px;">Human anatomy</span>\
      </div>\
      <div class="navItem row" data-gotoSubjectBiology="viewBiology" tabindex="20" >\
              <span style="font-size:14px;">Genetics</span>                            </div>\
      <div class="navItem row" data-gotoSubjectBiology="viewBiology" tabindex="30" >\
              <span style="font-size:14px;">Reproduction</span>\
      </div></div>');
  //#########biology content end


  //#########english content
  var englishContent = $(' <div class="active" id="viewList">\
  <div id="generatedList" class="list" style="text-align:center;">\
      <div class="row"><center>\
          <h4 style="font-weight: bold;color:#990033;">English Grammar</h4>\
          </center>\
          <p style="font-size:13px;font-weight:bold;color:#990033;">Reading: Topic 1</p>\
          \
      </div>\
      <div class="navItem row" id="english_focus" data-gotoSubjectDeepLayer="viewPartsOfSpeech" tabindex="10" >\
              <span style="font-size:14px;">Parts of speech</span>\
      </div>\
      <div class="navItem row" data-gotoBiologyDeepLayer="viewBiology" tabindex="20" >\
              <span style="font-size:14px;">Phrases of clauses</span>                            </div>\
      <div class="navItem row" data-gotoBiology="viewBiology" tabindex="30" >\
              <span style="font-size:14px;">Header</span>\
      </div>\
      <div class="navItem row" data-gotoBiology="viewBiology" tabindex="40" >\
              <span style="font-size:14px;">Header</span>\
      </div>\
      <div class="navItem row" data-gotoBiology="viewBiology" tabindex="50" >\
              <span style="font-size:14px;">Header</span>\
      </div>\
              </div>');
  //#########english content end
  // function logg(){
  //   console.log("Navigating to different page");
  // }
  // document.getElementById("viewEnglish").addEventListener("click",logg);

  return app;
}());
