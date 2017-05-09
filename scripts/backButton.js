/**
 * Created by ricevind on 04.03.17.
 */

(function() {
    "use strict";
    const backHref = document.querySelector('#backButton');

    if (window.history) {
        backHref.addEventListener('click', function(e){

            e.preventDefault();
            window.history.back();
        }, false);
    } else {
        backHref.setAttribute('href', 'index.html');
    }
})();