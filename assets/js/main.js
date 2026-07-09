(function () {
    'use strict';

    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav__link');

    function highlightCurrent() {
        var offset = window.scrollY + 80;
        var currentId = null;

        sections.forEach(function (section) {
            if (offset >= section.offsetTop) {
                currentId = section.id;
            }
        });

        links.forEach(function (link) {
            link.classList.toggle('active-link', link.getAttribute('href') === '#' + currentId);
        });
    }

    window.addEventListener('scroll', highlightCurrent, { passive: true });
    highlightCurrent();
})();
