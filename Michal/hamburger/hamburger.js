(function () {
  "use strict";

  var hamburger = document.querySelector('#hamburger');
  var menu = document.querySelector('#MENUU');

  function toogleClass(elems, className) {
    elems.map(function (elem) {
      elem.classList.toggle(className)

    });
  }

  hamburger.addEventListener('click', function(){
    "use strict";
    toogleClass([hamburger, menu], 'open');
  });


})();