// Description: This script sets the active menu item based on the current URL hash for a dropdown menu in a project page.
document.addEventListener("DOMContentLoaded", function() {
    function setActiveMenu() {
        // Retire la classe active de tous les liens
        document.querySelectorAll('.menu_deroulant_projet a').forEach(function(link) {
            link.classList.remove('active');
        });
        // Récupère l'ancre dans l'URL
        var hash = window.location.hash;
        if (hash) {
            var activeLink = document.querySelector('.menu_deroulant_projet a[href="' + hash + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
    setActiveMenu();
    window.addEventListener('hashchange', setActiveMenu);
});