// Funktion til at indlæse Instagram-feed
function loadInstagramFeed() {
    // Erstat 'ACCESS_TOKEN' og 'USER_ID' med dine egne Instagram-oplysninger
    var accessToken = 'ACCESS_TOKEN';
    var userId = 'USER_ID';
    var instagramFeed = document.getElementById('instagramFeed');

    // Anmodning til Instagram API for at hente de seneste billeder
    fetch('https://graph.instagram.com/' + userId + '/media?fields=id,media_url&access_token=' + accessToken)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(post => {
            var img = document.createElement('img');
            img.src = post.media_url;
            instagramFeed.appendChild(img);
        });
    })
    .catch(error => console.error('Fejl ved hentning af Instagram-feed:', error));
}

// Funktion til at indlæse Facebook-feed
function loadFacebookFeed() {
    // Erstat 'PAGE_ID' med din egen Facebook-side-ID
    var pageId = 'https://www.facebook.com/middelfarthk/?ref=embed_page';
    var facebookFeed = document.getElementById('facebookFeed');

    // Anmodning til Facebook Graph API for at hente de seneste opslag
    fetch('https://www.facebook.com/middelfarthk/?ref=embed_page' + pageId + '/posts?fields=message,created_time&access_token=' + accessToken)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(post => {
            var p = document.createElement('p');
            p.textContent = post.message;
            facebookFeed.appendChild(p);
        });
    })
    .catch(error => console.error('Fejl ved hentning af Facebook-feed:', error));
}

// Kald funktionerne til at indlæse feeds, når siden indlæses
window.onload = function() {
    loadInstagramFeed();
    loadFacebookFeed();
};
