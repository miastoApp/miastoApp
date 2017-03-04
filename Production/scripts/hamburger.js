(function () {
  "use strict";

  var hamburger = document.querySelector('#hamburger');
  var menu = document.querySelector('#menu');
  var menuWrapper = document.querySelector('.menu-wrapper');

  function toggleClass(elems, className) {
    elems.map(function (elem) {
      elem.classList.toggle(className)

    });
  }

  hamburger.addEventListener('click', function(e){
    "use strict";
    e.preventDefault();
    toggleClass([hamburger, menu, menuWrapper], 'open');
  });


})();