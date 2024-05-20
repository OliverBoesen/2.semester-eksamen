
//////////////////////////////////////////////////////// Header start


// Tilføjer en event listener til document objektet, der lytter efter 'DOMContentLoaded' begivenheden
// Dette sikrer, at koden først køres, når hele HTML-dokumentet er indlæst
document.addEventListener("DOMContentLoaded", function() {
    // Vælg dropdown-elementet ved dets ID 'header-dropdown'
    const dropdown = document.getElementById('header-dropdown');
    // Vælg dropdown-indholdet ved dets ID 'header-dropdown-content'
    const dropdownContent = document.getElementById('header-dropdown-content');
    // Vælg dropdown-pilen ved dens klasse 'header-dropdown-arrow'
    const dropdownArrow = dropdown.querySelector('.header-dropdown-arrow');

    // Gør så dropdownen ikke vises, når siden genindlæses
    dropdownContent.style.display = 'none';

    // Tilføjer en event listener til dropdown, der lytter efter 'mouseover' begivenheden
    // Dette viser dropdown-indholdet, når musen holdes over dropdownen
    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    // Tilføjer en event listener til dropdown, der lytter efter 'mouseout' begivenheden
    // Dette skjuler dropdown-indholdet, når musen fjernes fra dropdownen
    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    // Tilføjer en event listener til dropdown-pilen, der lytter efter 'click' begivenheden
    // Dette toggler synligheden af dropdown-indholdet, når pilen klikkes
    dropdownArrow.addEventListener('click', function(event) {
        // Forhindrer klik-begivenheden i at sprede sig til forældrelementerne
        event.stopPropagation();
        // Forhindrer standard klik-handlingen
        event.preventDefault();
        // Toggler display-egenskaben for dropdown-indholdet
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Tilføjer en event listener til document, der lytter efter 'click' begivenheden
    // Dette skjuler dropdown-indholdet, når der klikkes uden for dropdownen
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });

    // Tilføjer active class til det nuværende menupunkt
    const currentPath = window.location.pathname; // Henter den nuværende sti fra URL'en
    const menuItems = document.querySelectorAll('.header-main-nav a'); // Vælg alle menupunkter
    menuItems.forEach(item => {
        // Tjek om href attributten på menupunktet matcher den nuværende sti
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active'); // Tilføj 'active' klassen til menupunktet
        }
    });
});

//////////////////////////////////////////////////////// Header slut


//////////////////////////////////////////////////////// Header bliver transparent start

// Tilføjer en event listener til vinduesobjektet, der lytter efter 'scroll' begivenheden
// Tilføjer en event listener til document objektet, der lytter efter 'DOMContentLoaded' begivenheden
// Dette sikrer, at koden først køres, når hele HTML-dokumentet er indlæst
document.addEventListener('DOMContentLoaded', function () {
    // Vælg header-elementet ved dets klasse 'site-header'
    const header = document.querySelector('.site-header');
    // Vælg navigation toggle-knappen ved dens klasse 'nav-toggle'
    const navToggle = document.querySelector('.nav-toggle');
    // Vælg hovednavigationen ved dens klasse 'header-main-nav'
    const mainNav = document.querySelector('.header-main-nav');
    
    // Tilføjer en event listener til vinduet, der lytter efter 'scroll' begivenheden
    window.addEventListener('scroll', function () {
        // Tjek om den vertikale scroll-position er større end 50 pixels
        if (window.scrollY > 50) {
            // Hvis ja, tilføj 'scrolled' klassen til header-elementet
            header.classList.add('scrolled');
        } else {
            // Ellers fjern 'scrolled' klassen fra header-elementet
            header.classList.remove('scrolled');
        }
    });

    // Tilføjer en event listener til navigation toggle-knappen, der lytter efter 'click' begivenheden
    navToggle.addEventListener('click', function () {
        // Toggler 'open' klassen på hovednavigationen
        mainNav.classList.toggle('open');
    });
});

//////////////////////////////////////////////////////// Header bliver transparent slut



//////////////////////////////////////////////////////// Error Side start

// Error siden, når man trykker på "Gå tilbage", så kommer man tilbage til siden, man kommer fra
function goBack() {
    window.history.back(); // Navigerer tilbage til den forrige side i browserens historik
}

//////////////////////////////////////////////////////// Error Side start