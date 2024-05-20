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