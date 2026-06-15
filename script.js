// Estructura de datos organizada por Lado -> Fase -> Canciones
const mixtapeData = {
    A: [
        {
            title: "Fase 1: Estas no le gustan tanto a usted... pero siempre me recuerdan a usted",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/4aXFFHGVSOyOioAmFe6HNv?si=2902a12e8f4d4d20", message: "Un dia nunca fue suficiente, ni 2 ni 3, tal vez una vida entera lo hubiera sido", author: "Santi" }, // tuyo - the citie
                { url: "https://open.spotify.com/intl-es/track/2xyCkGYkYIrbi5JwzCjcH8?si=388c4b7333094739", message: "Desde hace tiempo que deseo cada dia dejar de sentirme así, no la odio pero me cuesta recordar las cosas con amor", author: "Santi" }, // te odio - te vi en un planetario
                { url: "https://open.spotify.com/intl-es/track/5nx4a08HCtXziESYjGxmQp?si=4957b811c2704251", message: "Usted cree que siempre fuí muy exigente con lo que quise de usted?", author: "Santi" }, // vivo del aire - depresión sonora
                { url: "https://open.spotify.com/intl-es/track/0HI5eKYH3drwfp3xiW0gcw?si=665ef2172bcd4c19", message: "Por mucho tiempo pensé que era yo quien era su lugar seguro y con quien podia llorar sin sentirse mal. Ahora me doy cuenta que era todo lo contrario", author: "Santi" }, // niños - la texana
                { url: "https://open.spotify.com/intl-es/track/6JKcFQh5H6Lph4oBbTJg0y?si=deb465552219411e", message: "Ojalá si le haya dejado algo...", author: "Santi" }  // el ciego - la texana
            ]
        },
        {
            title: "Fase 2: Canciones del pasado y del futuro que ya no le voy a poder dedicar más",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/4CoJ7RN7myJHXYIx1pB8IF?si=e32e52df9b3f49d3", message: "No me daba cuenta pero tal vez desde el inicio siempre tomabamos rumbos diferentes", author: "Santi" }, // los imanes - odisseo
                { url: "https://open.spotify.com/intl-es/track/43dJHapc2VR9VwBACyljgQ?si=84e1622486e14459", message: "Siempre quise que usted se viera como yo la veía tal vez ya lo hace y por eso está lejos", author: "Santi" }, // el beso del payaso - enjambre
                { url: "https://open.spotify.com/intl-es/track/6ZIdBibfqeFGq3AbkzHU1X?si=c1a33e3d3a1d4238", message: "Me da rabia que no pude interpretar la canción como quería... soy un desastre", author: "Santi" }, // contigo - los concorde
                { url: "https://open.spotify.com/intl-es/track/4QhZMvnoOxP6Ra73Ergy1f?si=322be270add5455d", message: "Toda la música que he compuesto, todo lo que he escrito fue pensando en alguien que ya no me queria más. Pero mi afán de conocer nuestro mañana y futuro siempre fue por usted", author: "Santi" }, // si no te tengo a ti - hombres G
                { url: "https://open.spotify.com/intl-es/track/5nkCX8swYXg7tMk9gemoOo?si=b019d2b4b3cb4303", message: "La última canción agregada a una playlist que se va a perder en el tiempo", author: "Santi" }, // tan solo un instante - enanitos verdes
                { url: "https://open.spotify.com/intl-es/track/7eKkXV2jH4xGefItHAUk9g?si=ed10cfadf5414c35", message: "Todos los días sin usted se sienten como el primer dia, todo el dia queriendo hablar, hacer algún chiste tonto sin un mensaje de buenos dias o buenas noches que me esté esperando", author: "Santi" }  // mi primer dia sin ti - los enanitos verdes
            ]
        },
        {
            title: "Fase 3: Hubiera hecho cualquier cosa por arreglarlo todo",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1sboWJLAzxzF9hD4TVUoLH?si=8b4b1c10fc964a4b", message: "Hmm no diria que me va tan bien", author: "Santi" }, // si todo va bien...
                { url: "https://open.spotify.com/intl-es/track/7AvyWxJDbrAjR3G50RBW3b?si=3830f5348a474961", message: "Por mucho tiempo hicimos malabares para vernos se nota mucho cuando uno comienza a dar las cosas por hecho, o por terminadas. Toda la ropa que llevo, las peliculas que veo y la música que escucho es la que le gusta a usted", author: "Santi" }, // termonuclear - perfecto miserable
                { url: "https://open.spotify.com/intl-es/track/1Ptqdf00ZVJ1npGo2N1VFD?si=3477adeab6fa4958", message: "Mi mayor miedo se volvió real más rápido de lo que nunca jamás pensé", author: "Santi" }, // ya no te gusto - el antisocial
                { url: "https://open.spotify.com/intl-es/track/39bS3YWo6EuLFVbHvdbjau?si=cc55fd854b4d4ee1", message: "Todo fue de un momento a otro, ¿Como se supone que lo acepte y lo soporte? no soy un bastardo sin sentimientos", author: "Santi" }, // terapia - lazaro suplika dopamina
                { url: "https://open.spotify.com/intl-es/track/0WYOxDu4eysJlaioyyrMEO?si=96a4a10813fc43ae", message: "Nunca podría sentirme feliz por usted por estar con alguien más, llameme inmaduro todo lo que quiera", author: "Santi" }  // no somos amigos - siempre no
            ]
        },
        {
            title: "Fase 4: No hay más remedio",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/6QDqe6O7K3jqpgPzEO4XUm?si=54f11f1f403644a7", message: "Eres mi amor perfecto -Una taza personalizada con los viejitos de UP. ¿Realmente significaba algo? ¿o era la euforia del momento?", author: "Santi" }, // como miranda - estamos perdidos
                { url: "https://open.spotify.com/intl-es/track/5PRKsAuv20FvOgfXBinVf8?si=a3c71df833744c3c", message: "Tal vez siempre estuve solo y triste hasta que usted llegó", author: "Santi" }, // por qué tan solo y triste?
                { url: "https://open.spotify.com/intl-es/track/7BCuILMtoNvlDPtKG57mqw?si=300d94746a634a86", message: "Qué tienen con los lobos? 🗣️🗣️ no sé por qué no se puso la portada correcta", author: "Papito(??)" }, // 10 am - PXNDX
                { url: "https://open.spotify.com/intl-es/track/74RbuwSLTpIKA0RqOo5msR?si=35fc8df3eda74497", message: "Al parecer si era solo rock n´ roll", author: "Santi" }, // sismo - division minuscula
                { url: "https://open.spotify.com/intl-es/track/6JxsIadCWYVwOBQymaYMcZ?si=049ba40005074b86", message: "Por mucho tiempo pensé que seria muy bacano dedicarsela", author: "Santi" }, // fragil - alison
                { url: "https://open.spotify.com/intl-es/track/4OxT0CsUF1GMW1DGMdqhMX?si=9b439da1197544a1", message: "No quiero que sienta que fue su culpa, pero tampoco fue del todo mia", author: "Santi" }, // tratame mal - bipoxx
                { url: "https://open.spotify.com/intl-es/track/6UAa6a7abJYiEj9ggLsfb8?si=bda13700c54a4f6d", message: "Ese dia no va a llegar nunca, cierto?", author: "Santi" }  // ya no es lo mismo - sin censura
            ]
        }
    ],
    B: [
        {
            title: "Fase 1: ...",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1NeLwFETswx8Fzxl2AFl91?si=feed4208c83644a4", message: "Definitivamente no era el lugar ni momento adecuado", author: "Santi" }, // something about us - daft punk
                { url: "https://open.spotify.com/intl-es/track/49edirvFZwWjxAMZJRg1hN?si=309a6eecf05c4977", message: "Soy un tipo aburrido y sin hogar si no está conmigo", author: "Santi" }, // lovesong - the cure
                { url: "https://open.spotify.com/intl-es/track/0Ky1rnbxYY41g4H9plxK6Q?si=2516ddaf74bf40ae", message: "Robert Smith dijo mentiras, los hombres si lloran", author: "Santi" }, // boys don´t cry - the cure
                { url: "https://open.spotify.com/intl-es/track/2PAhcPwab2sJz340QHtunD?si=e9f74c69b8de4ca9", message: "Tuve mis dudas como cualquier otra persona no he sabido nunca que es lo mejor para mi. Al final siempre la escogí a usted", author: "Santi" }  // this modern love - bloc party
            ]
        },
        {
            title: "Fase 2: Nunca viajamos juntos lo suficiente",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/2MLHyLy5z5l5YRp7momlgw?si=5eec1fbfa81e4ef2", message: "Desearia haber vuelto a la playa juntos, espero que haya disfrutado la última vez que fue", author: "Santi" },  // island in the sun - weezer
                { url: "https://open.spotify.com/intl-es/track/1O9D7P7Z1wMJXW19zTXrXi?si=3caf17bb3acb488e", message: "No soportaba la idea de que usted estuviera a 3 cuadras de mi casa y no poder disfrutar de su presencia. Me tuve que ir de verdad", author: "Santi" },  // go away - weezer
                { url: "https://open.spotify.com/intl-es/track/6oEiISbRGHUyItBkESQoQ7?si=6e5209143f654510", message: "La soledad se encuentra cuando uno no tiene con quien compartir las cosas mundanas", author: "Santi" }, // lonely girl - weezer
                { url: "https://open.spotify.com/intl-es/track/35SRuRfp5BvD1yArmXKNHO?si=819f6d0e6449495c", message: "usted me gusta es lo que yo siempre he querido en una persona", author: "Santiago - 29 de Noviembre de 2020" }, // i just threw out the love of my dreams
                { url: "https://open.spotify.com/intl-es/track/1ndGB6rvxKYN9seCYO1dTF?si=65c5f2c107114230", message: "Queria encontrar un lugar para ambos, ya no quiero nisiquiera un lugar para mi", author: "Santiago - Nisiquiera un guitarrista mediocre, algo peor" }, // zephyr song - RHCP
                { url: "https://open.spotify.com/intl-es/track/2aibwv5hGXSgw7Yru8IYTO?si=4eb467960e544bae", message: "Me duele la mano... ¿¿¿COMO QUE TODA LA CANCIÖN SE TOCA IGUAL????", author: "Santi" },  // snow (hey oh) - RHCP
                { url: "https://open.spotify.com/intl-es/track/6ISuXA3UCPMtsyEUGUTAyn?si=666096e9dee64076", message: "En Medellín no se ven las estrellas. La ausencia de algo no nos hace olvidar las cosas más fácil", author: "Santi" }, // stellar - incubus
                { url: "https://open.spotify.com/intl-es/track/6KtLECDztnah63TNmV4Plw?si=a257e35c91194a1e", message: "No tendría que extrañar más las estrellas si estuviera usted aquí", author: "Santi" }  // wish you were here - incubus
            ]
        },
        {
            title: "Fase 3: No recuerdo quien era yo antes de conocernos",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/6B7wWLpJGJ9BPju5ytcUvh?si=a8bd6a86ddc44632", message: "¿Por cuanto tiempo no estuvimos bien?", author: "Santi" }, // movember - mom jeans
                { url: "https://open.spotify.com/intl-es/track/19aUuDd6udp1ACNo9t3IuZ?si=4b43b49ca4744061", message: "Usted se llevó todo mi amor", author: "Santi" }, // death cup - mom jeans
                { url: "https://open.spotify.com/intl-es/track/794wvyVcaQpECvWCBQpaTB?si=0523fc28a0804f9e", message: "Tengo tanto miedo de estar solo como usted. Nunca fui tan fuerte. La extraño cada minuto de cada dia", author: "Santi" }, // sobs quietly - mom jeans
                { url: "https://open.spotify.com/intl-es/track/7EdO50H2O5QuqAcEGCKeFY?si=4213de1931454445", message: "Debe ser duro ser tan indiferente y fria, ¿no?", author: "Santi" }, // stone - born without bones
                { url: "https://open.spotify.com/intl-es/track/3UwRnIg1UzkO7RI0luhN9O?si=b4e203497f274a00", message: "Está canción es muy buena, acaso creyó que tenia algo para decir para cada una de las canciones???", author: "Santi" }, // cheap fun - born without bones
                { url: "https://open.spotify.com/intl-es/track/5iZw5AzGiQx5rmmocWBFOz?si=ee994282c8114903", message: "Nunca me gustó viajar de noche, sería más bien \"La mañana a las 4 Am que manejé solo\" ", author: "Santi" }, // the night i drove alone - citizen
                { url: "https://open.spotify.com/intl-es/track/26iZhZ3qf0k47LrnLNyUdG?si=ec6922fb135048f9", message: "Qué es lo si quiera queda de mi? alguna vez tuve personalidad propia?", author: "Santi" }, // let me breathe whats mine
                { url: "https://open.spotify.com/intl-es/track/4s3IQXq6QpAeYxXS6g4MFE?si=bb15b8b92cfd4912", message: "...", author: "Santi" }, // am i not what you want? - isolate
                { url: "https://open.spotify.com/intl-es/track/2g7LEf8UhOrVbUHOcW3SvT?si=fbf837275a354837", message: "Anny despertó mi conciencia", author: "Santi" }  // saved by you - druidess
            ]
        },
        {
            title: "Fase 4: \"If there is light it, will find you\"",
            songs: [
                { url: "https://open.spotify.com/intl-es/track/1xcPzj7RRYcWGMDDgSe8JL?si=1c8355b383d24b9d", message: "Ni aquí ni en ningún lugar", author: "Santi" }, // majoring in minors - sugarcult
                { url: "https://open.spotify.com/intl-es/track/7pQUHNh2KfHTIYIVthjjya?si=d0d8cb10ba1e4a0c", message: "¿Usted me creeria si le dijera que no la necesito?", author: "Santi" }, // skeptics and true believers
                { url: "https://open.spotify.com/intl-es/track/40WWeoX26jtsfdmFx5iRty?si=4d81c96661f040d3", message: "Unos ojos tan lindos no son fáciles de olvidar", author: "Santi" }, // im low on gas... - pierce the veil
                { url: "https://open.spotify.com/intl-es/track/0k5N2FhF1zszcfHX1EOfFc?si=4082567b2a4d4286", message: "La psicologa hizo lo mismo que todo el mundo, siempre es mi culpa por tener miedo", author: "Santi" }, // liar´s love - title fight
                { url: "https://open.spotify.com/intl-es/track/63iO8MvYbHlGJXi6bAtTcs?si=82b5f21329a942ef", message: "...", author: "Santi" }, // make tonight - emanuel
                { url: "https://open.spotify.com/intl-es/track/6JfwpTVJAgiJifM1JrGFsC?si=7c6d7f53c96d449f", message: "Qué tienen con Noviembre? 🗣️🗣️", author: "Santi" }, // november - silverstein
                { url: "https://open.spotify.com/intl-es/track/0DKNNR9iDjwfCEpMiFXMJq?si=0b13cba3b85e4db2", message: "No sé si lo recuerda, pero esta fue la primer primerita canción que le dediqué si no me odia luego de esto. Corrijame si no es así", author: "Santi" }, // until the day i die - story of the year
                { url: "https://open.spotify.com/intl-es/track/5QYwIidpvmcqBWYx6hy8AT?si=3a135fc2d6f94bce", message: "Mala suya no haberme enviado más canciones de lim visqui, que temazo", author: "Santi" }, // it´ll be ok - limp bizkit
                { url: "https://open.spotify.com/intl-es/track/7HKRWMTErKh56EIBeFcmdf?si=c6afd8bb34004cc0", message: "No nos tomaremos de las manos una última vez", author: "Santi" }, // seize the day - avenged sevenfold
                { url: "https://open.spotify.com/intl-es/track/2Hy81a71pPf5lPWTq1o8ub?si=dc50e66f1d2a469d", message: "Live! Love! Burn! Die!", author: "Atreyu" }, // lip gloss and black - atreyu
                { url: "https://open.spotify.com/intl-es/track/4MpC6vTWuzT8ihH50DVbem?si=c5d26c2693644479", message: "No hay nada que agregar, toda la canción es lo que es", author: "Santi" }, // this flesh a tomb - atreyu
                { url: "https://open.spotify.com/intl-es/track/03IARX7s1aJZlDDvn8mJ2Z?si=af59b930ab9e491e", message: "...", author: "Santi" }  // forever and always - bullet for my valentine
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

function toggleInfo() {
    const infoPanel = document.getElementById('info-panel');
    const btnInfo = document.getElementById('btn-info');
    
    infoPanel.classList.toggle('active');
    btnInfo.classList.toggle('active');
}

// ACTUALIZADO: Lógica para alternar visibilidad entre Lado A y Lado B
function switchSide(side) {
    // Si cambian de lado, cerramos la nota explicativa automáticamente para mantener el orden
    document.getElementById('info-panel').classList.remove('active');
    document.getElementById('btn-info').classList.remove('active');

    document.getElementById('btn-lado-a').classList.toggle('active', side === 'A');
    document.getElementById('btn-lado-b').classList.toggle('active', side === 'B');

    document.getElementById('container-lado-a').classList.toggle('active', side === 'A');
    document.getElementById('container-lado-b').classList.toggle('active', side === 'B');
}
// ========================================================
// GENERADOR DE MOTIVOS VISUALES (VERSIÓN IMÁGENES)
// ========================================================

// Asegúrate de que estSantis coincidan con los archivos que subiste a tu carpeta "iconos"
const motifs = [
    'iconos/girasol.png',
    'iconos/guitarra.png',
    'iconos/corazon-amarillo.png',
    'iconos/corazon-blanco.png',
    'iconos/gafas-redondas.png',
    'iconos/gafas-cuadradas.png'
];

function generateBackgroundDecorations() {
    const bgContainer = document.getElementById('bg-decorations');
    if (!bgContainer) return;

    bgContainer.innerHTML = '';

    const itemsPerSide = 12; 
    // Dividimos el alto de la página (del 5% al 95%) en partes iguales
    const verticalStep = 90 / itemsPerSide;

    // Aceptamos el índice (i) para saber en qué "estante" colocar el icono
    function createIcon(side, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'bg-motif';
        
        const randomMotif = motifs[Math.floor(Math.random() * motifs.length)];
        wrapper.innerHTML = `<img src="${randomMotif}" alt="decoración">`;

        // BASE Y: Calcula el estante actual (ej. estante 0, estante 1, etc.)
        const baseY = 5 + (index * verticalStep);
        // Desorden sutil: Lo movemos un poquito arriba o abajo (+/- 3%) para que no parezca una línea perfecta
        const posY = baseY + (Math.random() * 6 - 3);

        // BASE X: Mantenemos el margen lateral seguro
        const posX = side === 'left' 
            ? (2 + Math.random() * 12)  // Izquierda: entre el 2% y el 14% de la pantalla
            : (82 + Math.random() * 12); // Derecha: entre el 82% y el 94% de la pantalla

        const scale = 0.5 + Math.random() * 0.6;
        const rotation = (Math.random() * 80) - 40;

        wrapper.style.left = `${posX}%`;
        wrapper.style.top = `${posY}%`;
        wrapper.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

        bgContainer.appendChild(wrapper);
    }

    // El ciclo ahora envía el número de estante (i) a la función
    for (let i = 0; i < itemsPerSide; i++) {
        createIcon('left', i);
        createIcon('right', i);
    }
}

// Inicializar la carga al abrir la página
renderMixtape();
generateBackgroundDecorations();