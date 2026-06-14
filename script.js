// Aquí agregas las canciones y los mensajes
const mixtape = [
    {
        iframeUrl: "https://open.spotify.com/embed/track/10BqAEenR3cEIC1wUqP0yC?utm_source=generator", 
        message: "Esa vibra post-punk oscura que tiene, el bajo es increíble. Me recuerda mucho a lo que escuchábamos esos días.",
        author: "Santi"
    },
    {
        iframeUrl: "https://open.spotify.com/embed/track/30WP1R0v7qjI1U1U0E2k5m?utm_source=generator",
        message: "Un clásico. El tono de las guitarras en este álbum de Senses Fail es brutal, siempre intento sacar ese mismo sonido con la pedalera.",
        author: "Santi"
    },
    {
        iframeUrl: "https://open.spotify.com/embed/track/7lRlq939cDG4SzWOF4VAnd?utm_source=generator",
        message: "Esa batería inicial de Deftones te atrapa de inmediato. Perfecta para desconectar.",
        author: "Santi"
    }
];

const container = document.getElementById('playlist-container');


mixtape.forEach(song => {
    const card = document.createElement('div');
    card.className = 'song-card';
    
    card.innerHTML = `
        <div class="spotify-embed">
            <iframe 
                style="border-radius:12px" 
                src="${song.iframeUrl}" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        </div>
        <div class="message-box">
            <p class="message-text">"${song.message}"</p>
            <p class="message-author">- ${song.author}</p>
        </div>
    `;
    
    container.appendChild(card);
});