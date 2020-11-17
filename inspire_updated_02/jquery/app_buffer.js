//global module
var MODULE = (function () {
  var app = {};
  // use the custom module namespace 'app' for all variables and functions you need to access through other scripts
  app.views = new Array();
  app.activeNavItem = null;
  app.currentView = null;
  app.currentViewID = 0;
  app.currentViewName = '';
  app.prevViewId = 0;
  app.currentNavId = 0;
  app.navItems = new Array();

  app.backEnabled = false;
  app.optionEnabled = false;
  app.fullAdVisible = false;

  app.optionButtonAction = '';

  // app.backButton = document.getElementById("bar-back");
  // app.actionButton = document.getElementById("bar-action");
  // app.optionsButton = document.getElementById("bar-options");

  // button input
  app.keyCallback = {
    dUp: function () { navVertical(false); },
    dDown: function () { navVertical(true); },
    dLeft: function () { navHorizontal(false); },
    dRight: function () { navHorizontal(true); },
    softLeft: function () { goBack(); },
    softRight: function () { executeOption(); },
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
    showView(0);
    initView();
  });

  // vertical navigation in increments of 10
  function navVertical(forward) {
    if (!app.isInputFocused() && !app.fullAdVisible) {
      app.updateNavItems();
      // jump to tabIndex
      var next = app.currentNavId;
      next += forward ? 10 : -10;
      if (next > getNavTabIndex(app.navItems.length - 1)) {
        // if larger than last index
        next = next % 10;
        // try to stay in same column
        if (app.navItems[next]) {
          focusActiveButton(app.navItems[next]);
        } else {
          focusActiveButton(app.navItems[0]);
        }
      } else if (next < 0) {
        // if smaller than 0
        var lastTab = getNavTabIndex(app.navItems.length - 1);
        var rowIndex = parseInt(Math.floor(lastTab * 0.1) * 10);
        // try to stay in same column
        var columnIndex = (next + 10) % 10;
        next = rowIndex + columnIndex;
        for (var i = 0; i < app.navItems.length; i++) {
          if (getNavTabIndex(i) == next) {
            focusActiveButton(app.navItems[i]);
            break;
          }
        }
      } else {
        var found = false;
        for (var i = 0; i < app.navItems.length; i++) {
          if (getNavTabIndex(i) == next) {
            focusActiveButton(app.navItems[i]);
            found = true;
            break;
          }
        }
        if (!found) {
          // nothing found, try start of next row
          var round = Math.floor(next / 10) * 10;
          for (var i = 0; i < app.navItems.length; i++) {
            if (getNavTabIndex(i) == round) {
              focusActiveButton(app.navItems[i]);
              found = true;
              break;
            }
          }
        }
      }
    }
  };

  // horizontal navigation in increments of 1
  function navHorizontal(forward) {
    if (!app.isInputFocused() && !app.fullAdVisible) {
      app.updateNavItems();
      // jump to array index for continuous horizontal navigation
      var currentTabIndex = app.currentNavId;
      for (var i = 0; i < app.navItems.length; i++) {
        if (getNavTabIndex(i) == currentTabIndex) {
          var next = i;
          next += forward ? 1 : -1;
          if (next >= app.navItems.length) {
            next = 0;
          } else if (next < 0) {
            next = app.navItems.length - 1;
          }
          focusActiveButton(app.navItems[next]);
          break;
        }
      }
    }
  };

  function getNavTabIndex(i) {
    return parseInt(app.navItems[i].getAttribute('tabIndex'));
  };

  function focusActiveButton(element) {
    app.activeNavItem = element;
    app.currentNavId = parseInt(app.activeNavItem.getAttribute('tabIndex'));

    // scroll to top
    if (app.currentNavId == 0) {
      try {
        app.currentView.scrollTo(0, 0);
      } catch (e) { }
    } else {
      // smooth scrolling into view
      app.activeNavItem.scrollIntoView({ behavior: "smooth" });
    }

    app.activeNavItem.focus();
    // update softkeys
    softkeyBar();
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
    if (!app.fullAdVisible) {
      if (!app.isInputFocused()) { /* NOT in some input field */
        if (app.activeNavItem.getAttribute('data_gotoHome')) {
          showView(app.activeNavItem.getAttribute('data_gotoHome'));
          initView();
        } else if (app.activeNavItem.getAttribute('data_gotoStudy')) {
          showViewByName(app.activeNavItem.getAttribute('data_gotoStudy'));
          initView();
        }else if (app.activeNavItem.getAttribute('data_gotoBiology')) {
          showViewByName(app.activeNavItem.getAttribute('data_gotoBiology'));
          initView();
        }else if (app.activeNavItem.getAttribute('data-gotoEnglish')) {
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


        else if (app.activeNavItem.getAttribute('data-function')) {
          var call = app.activeNavItem.getAttribute('data-function');
          switch (call) {
            case 'mailto':
              location.href = 'mailto:' + app.activeNavItem.innerHTML;
              break;
            case 'quit':
              window.close();
              break;
            case 'changeColor':
              app.activeNavItem.style.backgroundColor = 'green';
              console.log('changing color');
              break;
          }
        } else if (app.activeNavItem.tagName.toLowerCase() == 'legend') {
          // select input field next to the legend
          app.activeNavItem.nextElementSibling.focus();
        } else {
          console.log('nothing to execute');
        }
    }
  }
  };

  function goBack() {
    if (!app.isInputFocused() && !app.fullAdVisible && app.backEnabled) {
      showView(app.prevViewId);
      initView();
    }
  };

  // decide, what the 'soft key right' does
  function executeOption() {
    if (!app.fullAdVisible) {
      if (app.optionButtonAction == 'clear') { /* clear input */
        if (app.activeNavItem.tagName.toLowerCase() == 'legend') { /* clear sibling if focused element is a legend */
          app.activeNavItem.nextElementSibling.value = '';
        } else { /* otherwise clear element itself */
          app.activeNavItem.value = '';
        }
      } else if (app.optionButtonAction == 'something') {
        console.log('option action triggered');
      }
    }
  }

  app.isInputFocused = function () {
    var activeTag = document.activeElement.tagName.toLowerCase();
    var isInput = false;
    // the focus switches to the 'body' element for system ui overlays
    if (activeTag == 'input' || activeTag == 'select' || activeTag == 'text' || activeTag == 'textarea' || activeTag == 'body' || activeTag == 'html') {
      isInput = true;
    }
    return isInput;
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
    app.currentView.scrollTo(0, 0);
    // enable options button
    // enable back button
    if (app.currentViewName != 'viewMenu') {
      app.backEnabled = true;
      app.optionEnabled = true;
    } else {
      app.backEnabled = false;
      app.optionEnabled = false;
    }

    // focus first menu entry
    if (app.currentView.querySelector(".navItem")) {
      app.updateNavItems();
      focusActiveButton(app.navItems[0]);
    }
  };

  // fill navigation array for current view
  app.updateNavItems = function (index) {
    app.navItems = app.currentView.querySelectorAll('.navItem');
  }

  // set soft keys
  function softkeyBar() {
    if (app.backEnabled) {
      app.backButton.innerHTML = "Back";
    } else {
      app.backButton.innerHTML = "";
    }
    app.actionButton.innerHTML = "SELECT";
    if (app.isInputFocused()) {
      app.optionsButton.innerHTML = "Clear";
      app.optionButtonAction = 'clear';
    } else if (app.optionEnabled) {
      app.optionsButton.innerHTML = "Option";
      app.optionButtonAction = 'something';
    } else {
      app.optionsButton.innerHTML = "";
      app.optionButtonAction = '';
    }
  };

  return app;
}());

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

    }
    function loadStudy() {
      $("#results").empty();
      $("#results").append(studyContent);


    }
    function loadHome() {
      $("#results").empty();
      $("#results").append(homeContent);
      carousel();
    }

    document.getElementById("wisdom").addEventListener('focus', loadWisdom);

    document.getElementById("study").addEventListener('focus', loadStudy);
    // document.getElementById("home").addEventListener('focus', loadHome);

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
      <div class="navItem row" tabindex="20" style="">\
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
      <div class="navItem row" tabindex="30" >\
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
