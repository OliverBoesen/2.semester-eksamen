


document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById('header-dropdown');
    const dropdownContent = document.getElementById('header-dropdown-content');

    // Gør så dropdowned ikke vises når siden genindlæses
    dropdownContent.style.display = 'none';

    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

      // Tilføjer active class til nuværende menu punkt
      const currentPath = window.location.pathname;
      const menuItems = document.querySelectorAll('.header-main-nav a');
      menuItems.forEach(item => {
          if (item.getAttribute('href') === currentPath) {
              item.classList.add('active');
          }
      });
});



 // Tilføj en event listener til vinduesobjektet, der lytter efter 'scroll' begivenheden
window.addEventListener('scroll', function() {
    // Vælg header-elementet ved dets ID 'site-header'
    const header = document.getElementById('site-header');
    
    // Tjek om den vertikale scroll-position er større end 50 pixels
    if (window.scrollY > 50) {
        // Hvis ja, tilføj 'scrolled' klassen til header-elementet
        header.classList.add('scrolled');
    } else {
        // Ellers fjern 'scrolled' klassen fra header-elementet
        header.classList.remove('scrolled');
    }
    
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".Hold-afsnit .pile.venstre").addEventListener("click", function() {
        alert("Vi kunne ikke få en rigtig kalender til at virke. Du kigger på et billede.");
    });

    document.querySelector(".Hold-afsnit .pile.højre").addEventListener("click", function() {
        alert("Vi kunne ikke få en rigtig kalender til at virke. Du kigger på et billede.");
    });
});
