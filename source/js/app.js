initialLanguageCheck();
detectDeviceType();
revealBoxes();

function initialLanguageCheck() {
  //this function checks for the current language
  //If the cookie is not saved it'll save a new cookie and update the language attribute
  var language = getCookie('langCookie');

  if(language === 'en') {
    createCookie('langCookie', 'en', 100);
    document.documentElement.setAttribute('lang', "en");
    document.documentElement.setAttribute('dir', "ltr");
    replaceText(1);
  } else {
    createCookie('langCookie', 'ar', 100);
    document.documentElement.setAttribute('lang', "ar");
    document.documentElement.setAttribute('dir', "rtl");

    replaceText(2);
  }
}
function setLoading(visible) {
  if(visible) {
    document.getElementById('loading').style.display = "flex";
  }else {
    document.getElementById('loading').style.display = "none";
  }
}

function detectDeviceType() {
  try {
    if( /Android/i.test(navigator.userAgent) ) {
      document.getElementById('applebtn').style.display = "none";
      document.getElementById('applebtn2').style.display = "none";
    } else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
      document.getElementById('googlebtn').style.display = "none";
      document.getElementById('googlebtn2').style.display = "none";
    }
  } catch (e) {
  }
}

function replaceText(toLanguage) {
  var ar = enLang;
  if(toLanguage === 2) {
    ar = arLang;
  }

  Object.keys(ar).forEach(function(key) {
    var item = document.getElementById(key);
    if(item ){
      item.innerHTML = ar[key];
    }
  })
};

function toggleLanguage() {
  var currentLanguage = getCookie('langCookie');
  //
  if(currentLanguage === 'en') {
    createCookie('langCookie', 'ar', 100);
    document.documentElement.setAttribute('lang', "ar");
    document.documentElement.setAttribute('dir', "rtl");

    replaceText(2);
  } else {
    createCookie('langCookie', 'en', 100);
    document.documentElement.setAttribute('lang', "en");
    document.documentElement.setAttribute('dir', "ltr");

    replaceText(1);
  }
  hideNav();
}

function setBodyVisible(visible) {
  document.getElementsByTagName("body")[0].style.opacity = visible;
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function toggleNav(){
  var navLinks = document.getElementById('nav-responsive');
  var burgerAll = document.getElementsByClassName('hamburger');

  var ulfold;
  if(navLinks.className === 'nav-links'){
    // nav bar is hidden, then show it
    unfold = true;
  }else {
    unfold = false;
  }

  if(navLinks.className ==='nav-links'){
     navLinks.className += " unfold";
  } else {
     navLinks.className = "nav-links";
  }
  for(var i=0; i<burgerAll.length; i++) {
      if(unfold) {
        burgerAll[i].className += ' unfold';
      }
      else {
        burgerAll[i].className = 'hamburger';
      }
  }
}
function hideNav(){
    var x = document.getElementById('nav-responsive');
    var burgerAll = document.getElementsByClassName('hamburger');

    x.className = "nav-links";

    for(var i=0; i<burgerAll.length; i++) {
      burgerAll[i].className = 'hamburger';
    }
}

// JavaScript

function revealBoxes() {
  window.sr = ScrollReveal();

  sr.reveal('#header img.phone');

  sr.reveal('#features', {
    delay: 200,
    duration: 200,
    origin: 'bottom',
    distance: '100px'
  });

  sr.reveal('#partner', {
    delay: 200,
    duration: 200,
    origin: 'bottom',
    distance: '100px'
  });
  sr.reveal('#footer', {
       delay: 200,
       duration: 200,
       origin: 'bottom',
       distance: '100px'
   });
}
$(document).click(function() {
  // var navLinks = document.getElementById('nav-responsive');
  //
  // if(navLinks.className === 'nav-links unfold'){
  //   hideNav();
  // }
    // hideNav();
});
