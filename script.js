// Estructura de datos organizada por Lado -> Fase -> Canciones
const mixtapeData = {
    A: [
        {
            title: "Fase 1: Estas no le gustan tanto a usted... pero siempre me recuerdan a usted",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/4aXFFHGVSOyOioAmFe6HNv?si=2902a12e8f4d4d20", message: "Mensaje aquí...", author: "Tu nombre" }, // tuyo - the citie
                { url: "https://open.spotify.com/intl-es/track/2xyCkGYkYIrbi5JwzCjcH8?si=388c4b7333094739", message: "Mensaje aquí...", author: "Tu nombre" }, // te odio - te vi en un planetario
                { url: "https://open.spotify.com/intl-es/track/5nx4a08HCtXziESYjGxmQp?si=4957b811c2704251", message: "Mensaje aquí...", author: "Tu nombre" }, // vivo del aire - depresión sonora
                { url: "https://open.spotify.com/intl-es/track/0HI5eKYH3drwfp3xiW0gcw?si=665ef2172bcd4c19", message: "Mensaje aquí...", author: "Tu nombre" }, // niños - la texana
                { url: "https://open.spotify.com/intl-es/track/6JKcFQh5H6Lph4oBbTJg0y?si=deb465552219411e", message: "Mensaje aquí...", author: "Tu nombre" }  // el ciego - la texana
            ]
        },
        {
            title: "Fase 2: Rock Alternativo y Pop Clásico",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/4CoJ7RN7myJHXYIx1pB8IF?si=e32e52df9b3f49d3", message: "Mensaje aquí...", author: "Tu nombre" }, // los imanes - odisseo
                { url: "https://open.spotify.com/intl-es/track/50gjhPjZCyQpya1Bcq2BNe?si=6a280eaea89c42f8", message: "Mensaje aquí...", author: "Tu nombre" }, // californica - la gusana ciega
                { url: "https://open.spotify.com/intl-es/track/43dJHapc2VR9VwBACyljgQ?si=84e1622486e14459", message: "Mensaje aquí...", author: "Tu nombre" }, // el beso del payaso - enjambre
                { url: "https://open.spotify.com/intl-es/track/6ZIdBibfqeFGq3AbkzHU1X?si=c1a33e3d3a1d4238", message: "Mensaje aquí...", author: "Tu nombre" }, // contigo - los concorde
                { url: "https://open.spotify.com/intl-es/track/4QhZMvnoOxP6Ra73Ergy1f?si=322be270add5455d", message: "Mensaje aquí...", author: "Tu nombre" }, // si no te tengo a ti - hombres G
                { url: "https://open.spotify.com/intl-es/track/5nkCX8swYXg7tMk9gemoOo?si=b019d2b4b3cb4303", message: "Mensaje aquí...", author: "Tu nombre" }, // tan solo un instante - enanitos verdes
                { url: "https://open.spotify.com/intl-es/track/7eKkXV2jH4xGefItHAUk9g?si=ed10cfadf5414c35", message: "Mensaje aquí...", author: "Tu nombre" }  // mi primer dia sin ti - los enanitos verdes
            ]
        },
        {
            title: "Fase 3: Indie Emo",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1sboWJLAzxzF9hD4TVUoLH?si=8b4b1c10fc964a4b", message: "Mensaje aquí...", author: "Tu nombre" }, // si todo va bien...
                { url: "https://open.spotify.com/intl-es/track/7AvyWxJDbrAjR3G50RBW3b?si=3830f5348a474961", message: "Mensaje aquí...", author: "Tu nombre" }, // termonuclear - perfecto miserable
                { url: "https://open.spotify.com/intl-es/track/1Ptqdf00ZVJ1npGo2N1VFD?si=3477adeab6fa4958", message: "Mensaje aquí...", author: "Tu nombre" }, // ya no te gusto - el antisocial
                { url: "https://open.spotify.com/intl-es/track/39bS3YWo6EuLFVbHvdbjau?si=cc55fd854b4d4ee1", message: "Mensaje aquí...", author: "Tu nombre" }, // terapia - lazaro suplika dopamina
                { url: "https://open.spotify.com/intl-es/track/0WYOxDu4eysJlaioyyrMEO?si=96a4a10813fc43ae", message: "Mensaje aquí...", author: "Tu nombre" }  // no somos amigos - siempre no
            ]
        },
        {
            title: "Fase 4: Pop Punk y Punk Rock",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/6QDqe6O7K3jqpgPzEO4XUm?si=54f11f1f403644a7", message: "Mensaje aquí...", author: "Tu nombre" }, // como miranda - estamos perdidos
                { url: "https://open.spotify.com/intl-es/track/5PRKsAuv20FvOgfXBinVf8?si=a3c71df833744c3c", message: "Mensaje aquí...", author: "Tu nombre" }, // por qué tan solo y triste?
                { url: "https://open.spotify.com/intl-es/track/7BCuILMtoNvlDPtKG57mqw?si=8a51b3e30b7d4c8e", message: "Mensaje aquí...", author: "Tu nombre" }, // 10 am - PXNDX
                { url: "https://open.spotify.com/intl-es/track/74RbuwSLTpIKA0RqOo5msR?si=35fc8df3eda74497", message: "Mensaje aquí...", author: "Tu nombre" }, // sismo - division minuscula
                { url: "https://open.spotify.com/intl-es/track/6JxsIadCWYVwOBQymaYMcZ?si=049ba40005074b86", message: "Mensaje aquí...", author: "Tu nombre" }, // fragil - alison
                { url: "https://open.spotify.com/intl-es/track/4OxT0CsUF1GMW1DGMdqhMX?si=9b439da1197544a1", message: "Mensaje aquí...", author: "Tu nombre" }, // tratame mal - bipoxx
                { url: "https://open.spotify.com/intl-es/track/6UAa6a7abJYiEj9ggLsfb8?si=bda13700c54a4f6d", message: "Mensaje aquí...", author: "Tu nombre" }  // ya no es lo mismo - sin censura
            ]
        }
    ],
    B: [
        {
            title: "Fase 1: Chill, Electrónica y Post-Punk",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1NeLwFETswx8Fzxl2AFl91?si=feed4208c83644a4", message: "Mensaje aquí...", author: "Tu nombre" }, // something about us - daft punk
                { url: "https://open.spotify.com/intl-es/track/49edirvFZwWjxAMZJRg1hN?si=309a6eecf05c4977", message: "Mensaje aquí...", author: "Tu nombre" }, // lovesong - the cure
                { url: "https://open.spotify.com/intl-es/track/0Ky1rnbxYY41g4H9plxK6Q?si=2516ddaf74bf40ae", message: "Mensaje aquí...", author: "Tu nombre" }, // boys don´t cry - the cure
                { url: "https://open.spotify.com/intl-es/track/2PAhcPwab2sJz340QHtunD?si=e9f74c69b8de4ca9", message: "Mensaje aquí...", author: "Tu nombre" }  // this modern love - bloc party
            ]
        },
        {
            title: "Fase 2: Rock Alternativo",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/2MLHyLy5z5l5YRp7momlgw?si=5eec1fbfa81e4ef2", message: "Mensaje aquí...", author: "Tu nombre" },  // island in the sun - weezer
                { url: "https://open.spotify.com/intl-es/track/1O9D7P7Z1wMJXW19zTXrXi?si=3caf17bb3acb488e", message: "Mensaje aquí...", author: "Tu nombre" },  // go away - weezer
                { url: "https://open.spotify.com/intl-es/track/6oEiISbRGHUyItBkESQoQ7?si=6e5209143f654510", message: "Mensaje aquí...", author: "Tu nombre" }, // lonely girl - weezer
                { url: "https://open.spotify.com/intl-es/track/35SRuRfp5BvD1yArmXKNHO?si=819f6d0e6449495c", message: "Mensaje aquí...", author: "Tu nombre" }, // i just threw out the love of my dreams
                { url: "https://open.spotify.com/intl-es/track/1ndGB6rvxKYN9seCYO1dTF?si=65c5f2c107114230", message: "Mensaje aquí...", author: "Tu nombre" }, // zephyr song - RHCP
                { url: "https://open.spotify.com/intl-es/track/2aibwv5hGXSgw7Yru8IYTO?si=4eb467960e544bae", message: "Mensaje aquí...", author: "Tu nombre" },  // snow (hey oh) - RHCP
                { url: "https://open.spotify.com/intl-es/track/6ISuXA3UCPMtsyEUGUTAyn?si=666096e9dee64076", message: "Mensaje aquí...", author: "Tu nombre" }, // stellar - incubus
                { url: "https://open.spotify.com/intl-es/track/6KtLECDztnah63TNmV4Plw?si=a257e35c91194a1e", message: "Mensaje aquí...", author: "Tu nombre" }  // wish you were here - incubus
            ]
        },
        {
            title: "Fase 3: Midwest Emo y Alt Emo",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/6B7wWLpJGJ9BPju5ytcUvh?si=a8bd6a86ddc44632", message: "Mensaje aquí...", author: "Tu nombre" }, // movember - mom jeans
                { url: "https://open.spotify.com/intl-es/track/19aUuDd6udp1ACNo9t3IuZ?si=4b43b49ca4744061", message: "Mensaje aquí...", author: "Tu nombre" }, // death cup - mom jeans
                { url: "https://open.spotify.com/intl-es/track/794wvyVcaQpECvWCBQpaTB?si=0523fc28a0804f9e", message: "Mensaje aquí...", author: "Tu nombre" }, // sobs quietly - mom jeans
                { url: "https://open.spotify.com/intl-es/track/7EdO50H2O5QuqAcEGCKeFY?si=4213de1931454445", message: "Mensaje aquí...", author: "Tu nombre" }, // stone - born without bones
                { url: "https://open.spotify.com/intl-es/track/3UwRnIg1UzkO7RI0luhN9O?si=b4e203497f274a00", message: "Mensaje aquí...", author: "Tu nombre" }, // cheap fun - born without bones
                { url: "https://open.spotify.com/intl-es/track/5iZw5AzGiQx5rmmocWBFOz?si=ee994282c8114903", message: "Mensaje aquí...", author: "Tu nombre" }, // the night i drove alone - citizen
                { url: "https://open.spotify.com/intl-es/track/26iZhZ3qf0k47LrnLNyUdG?si=ec6922fb135048f9", message: "Mensaje aquí...", author: "Tu nombre" }, // let me breathe whats mine
                { url: "https://open.spotify.com/intl-es/track/4s3IQXq6QpAeYxXS6g4MFE?si=bb15b8b92cfd4912", message: "Mensaje aquí...", author: "Tu nombre" }, // am i not what you want? - isolate
                { url: "https://open.spotify.com/intl-es/track/2g7LEf8UhOrVbUHOcW3SvT?si=fbf837275a354837", message: "Mensaje aquí...", author: "Tu nombre" }  // saved by you - druidess
            ]
        },
        {
            title: "Fase 4: Pop Punk, Post-Hardcore y Metalcore",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1xcPzj7RRYcWGMDDgSe8JL?si=1c8355b383d24b9d", message: "Mensaje aquí...", author: "Tu nombre" }, // majoring in minors - sugarcult
                { url: "https://open.spotify.com/intl-es/track/7pQUHNh2KfHTIYIVthjjya?si=d0d8cb10ba1e4a0c", message: "Mensaje aquí...", author: "Tu nombre" }, // skeptics and true believers
                { url: "https://open.spotify.com/intl-es/track/40WWeoX26jtsfdmFx5iRty?si=4d81c96661f040d3", message: "Mensaje aquí...", author: "Tu nombre" }, // im low on gas... - pierce the veil
                { url: "https://open.spotify.com/intl-es/track/0k5N2FhF1zszcfHX1EOfFc?si=4082567b2a4d4286", message: "Mensaje aquí...", author: "Tu nombre" }, // liar´s love - title fight
                { url: "https://open.spotify.com/intl-es/track/63iO8MvYbHlGJXi6bAtTcs?si=82b5f21329a942ef", message: "Mensaje aquí...", author: "Tu nombre" }, // make tonight - emanuel
                { url: "https://open.spotify.com/intl-es/track/6JfwpTVJAgiJifM1JrGFsC?si=7c6d7f53c96d449f", message: "Mensaje aquí...", author: "Tu nombre" }, // november - silverstein
                { url: "https://open.spotify.com/intl-es/track/0DKNNR9iDjwfCEpMiFXMJq?si=0b13cba3b85e4db2", message: "Mensaje aquí...", author: "Tu nombre" }, // until the day i die - story of the year
                { url: "https://open.spotify.com/intl-es/track/5QYwIidpvmcqBWYx6hy8AT?si=3a135fc2d6f94bce", message: "Mensaje aquí...", author: "Tu nombre" }, // it´ll be ok - limp bizkit
                { url: "https://open.spotify.com/intl-es/track/7HKRWMTErKh56EIBeFcmdf?si=c6afd8bb34004cc0", message: "Mensaje aquí...", author: "Tu nombre" }, // seize the day - avenged sevenfold
                { url: "https://open.spotify.com/intl-es/track/2Hy81a71pPf5lPWTq1o8ub?si=dc50e66f1d2a469d", message: "Mensaje aquí...", author: "Tu nombre" }, // lip gloss and black - atreyu
                { url: "https://open.spotify.com/intl-es/track/4MpC6vTWuzT8ihH50DVbem?si=c5d26c2693644479", message: "Mensaje aquí...", author: "Tu nombre" }, // this flesh a tomb - atreyu
                { url: "https://open.spotify.com/intl-es/track/03IARX7s1aJZlDDvn8mJ2Z?si=af59b930ab9e491e", message: "Mensaje aquí...", author: "Tu nombre" }  // forever and always - bullet for my valentine
            ]
        }
    ]
};

// Función para construir e inyectar el HTML de las canciones en la página
function renderMixtape() {
    ['A', 'B'].forEach(side => {
        const container = document.getElementById(`container-lado-` + side.toLowerCase());
        
        mixtapeData[side].forEach((phase, index) => {
            const accordion = document.createElement('div');
            accordion.className = 'phase-accordion';
            
            if (index === 0) accordion.classList.add('open');

            const header = document.createElement('div');
            header.className = 'phase-header';
            header.textContent = phase.title;
            
            header.addEventListener('click', () => {
                accordion.classList.toggle('open');
            });

            const content = document.createElement('div');
            content.className = 'phase-content';

            phase.songs.forEach(song => {
                // MAGIA AQUÍ: Convertimos tu enlace normal en un enlace de reproductor (embed)
                let finalUrl = song.url;
                if (finalUrl.includes('/track/')) {
                    // Extraemos el código único de la canción y armamos la URL correcta
                    const trackId = finalUrl.split('/track/')[1].split('?')[0];
                    finalUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
                }

                const card = document.createElement('div');
                card.className = 'song-card';
                
                // Construimos la tarjeta con la URL ya corregida (finalUrl) y sin el sandbox
                card.innerHTML = `
                    <div class="spotify-embed">
                        <iframe 
                            style="border-radius:12px" 
                            src="${finalUrl}" 
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
                content.appendChild(card);
            });

            accordion.appendChild(header);
            accordion.appendChild(content);
            container.appendChild(accordion);
        });
    });
}

// Lógica para alternar visibilidad entre el Lado A y Lado B
function switchSide(side) {
    document.getElementById('btn-lado-a').classList.toggle('active', side === 'A');
    document.getElementById('btn-lado-b').classList.toggle('active', side === 'B');

    document.getElementById('container-lado-a').classList.toggle('active', side === 'A');
    document.getElementById('container-lado-b').classList.toggle('active', side === 'B');
}

// Inicializar la carga al abrir la página
renderMixtape();